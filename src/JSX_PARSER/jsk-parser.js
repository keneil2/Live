const startingTagRegex =
  /<[a-zA-Z0-9]+(\s+[a-zA-Z0-9]+=\{?["'][^"']*["']\}?\s*)*>/g;
const endingTagRegex = /<\/*[a-zA-Z0-9]+>/g;
const ContentRegex = /[<>/=""]/;

class JSKPARSER {
  constructor(tokens) {
  
    this.tokens = tokens;
    
    this.root = { type: null, attributes: null, content: null, children: [] };
    this.stack= [this.root];
    this.tagNameRegex = /[a-zA-Z0-9]+/;
    this.attributeRegex = /([\w-]+)=['"]([^'"]*)['"]/g;
  }

  parser() {
    let starting_tagseen = 0;
    for (let i = 0; i < this.tokens.length; i++) {

      if (this.tokens[i].type == "JSK_START_TAG" && starting_tagseen == 0) {

        const startTag = this.tokens[i].name;

        this.root.type = this.startTagHandler(startTag);

        this.root.attributes = this.atrrtibuteHandler(startTag);

        starting_tagseen++;
        this.tokens.shift();

      } else if (this.tokens[i].type == "JSK_TEXT" && starting_tagseen == 0) {

        this.root.content = this.tokens[i].name;
        this.tokens.shift();

      } else if (this.root.type !== null) {
           this.nestedTagHandler(this.tokens);
        break;
      }
    }

    return this.root;
  }

  startTagHandler(startTag) {
    const tagName = startTag.match(this.tagNameRegex);
    return tagName[0];
  }
  atrrtibuteHandler(startTag) {
    let attributes = startTag.match(this.attributeRegex);
    if (attributes) {
      console.log(attributes);
      const atrrtibuteobject = this.attributeExtractor(attributes);
      return atrrtibuteobject;
    }
  }

  nestedTagHandler(tokens) {
    for (const token of tokens) {
      switch (token.type) {
        case 'JSK_START_TAG':
          this.handleNestedStartTag(token);
          break;
        case 'JSK_CLOSING_TAG':
          this.handleClosingTag(token);
          break;
        case 'JSK_TEXT':
          this.handleText(token);
          break;
      }
    }
    return this.root;
  }








  handleNestedStartTag(token){
    const newNode ={
      type:this.startTagHandler(token.name),
     attributes:this.atrrtibuteHandler(token.name),
      content:null,
      children:[]
    }
    
   const currentParent= this.stack[this.stack.length-1];
    currentParent.children.push(newNode);
    // console.log("current",this.stack);
    this.stack.push(newNode);
  }
  handleClosingTag(token) {
    // Pop stack to return to parent
    if (this.stack.length > 1) {
      this.stack.pop();
    }
  }
  handleText(token) {
    const currentParent = this.stack[this.stack.length - 1];
    currentParent.content = currentParent.content 
      ? currentParent.content + token.name 
      : token.name;
  }
  attributeExtractor(attribute) {
    // console.log(attribute)
    let ac;
    let attrobj = {};
    attribute.forEach((a) => {
      // if(ac !== a){
      const at = a.trim().split("=");
      if (at[0].trim() == "className") {
        attrobj["class"] = at[1];
      } else {
        attrobj[at[0].trim()] = at[1].trim();
      }
      // }
      // ac=a;
    });
    return attrobj;
  }
}

export default JSKPARSER;