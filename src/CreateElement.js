class CreateElement {
  /**
   * @param elementObject
   */

  // todo: pass an object instead of an the values re-write the class basically learn recursion algorithm for nested html tags
  constructor(elementObject,props) {
    this.elementObject = elementObject;
    this.props=props;
  }
  /**
   * creates all the this passed to the Create Element Constructor
   * @returns Element
   */
  create() {
    let container = null;

    if (Object.hasOwn(this.elementObject, "type")) {

      let ParentElement = this.elementObject.type;

      container = document.createElement(ParentElement);

    } else {

      throw new Error("your missing the element type");

    }

    if (Object.hasOwn(this.elementObject, "attributes")) {

      this.attributesHandler(container, this.elementObject.attributes);

    }

    if (Object.hasOwn(this.elementObject, "content")) {
         if(this.elementObject.content){
        container.innerText = this.propsHandler(this.elementObject.content);   
         }
     

    }

    if (Object.hasOwn(this.elementObject, "children")) {
     
      this.createChildren(container, this.elementObject.children);

    }

    return container;
  }

  /**
   * handle props
   * @param {*} element
   */
  attributesHandler(element, props) {
    if (typeof props === "object") {
      const events = [
        // Mouse Events
        "onclick",
        "ondblclick",
        "onmousedown",
        "onmouseup",
        "onmouseover",
        "onmousemove",
        "onmouseout",
        "onmouseenter",
        "onmouseleave",

        // Keyboard Events
        "onkeydown",
        "onkeypress",
        "onkeyup",

        // Form Events
        "onfocus",
        "onblur",
        "oninput",
        "onchange",
        "onsubmit",
        "onreset",
        "onselect",

        // Focus Events
        "onfocus",
        "onblur",
        "onfocusin",
        "onfocusout",

        // Window Events
        "onresize",
        "onscroll",
        "onload",
        "onunload",
        "onbeforeunload",
        "onhashchange",
        "onpopstate",

        // Clipboard Events
        "oncopy",
        "oncut",
        "onpaste",

        // Drag and Drop Events
        "ondrag",
        "ondragstart",
        "ondragend",
        "ondragenter",
        "ondragleave",
        "ondragover",
        "ondrop",

        // Media Events
        "onplay",
        "onpause",
        "onended",
        "onvolumechange",
        "onwaiting",
        "oncanplay",
        "oncanplaythrough",

        // Touch Events
        "ontouchstart",
        "ontouchmove",
        "ontouchend",
        "ontouchcancel",

        // Others,
        "onwheel",
      ];

      Object.entries(props).forEach((attributes) => {
        if (events.includes(attributes[0])) {
          const event = attributes[0];

          const func = attributes[1];

          element[event] = func; 
          
        } else {
          element.setAttribute(attributes[0], attributes[1]);
        }
      });
    } else {
      throw new Error("the props must be of type object/ associative array");
    }
  }

  /**
   * add class Name to an element
   * @param {*} Element
   */
  classHandler(Element) {
    if (this.Class !== null) {
      Element.ClassName = this.Class;
    }
  }
  /**
   * create child element
   * @param {*} element
   * @param {*} parent_element
   */
  createChildren(parent_element, child) {
    if (Array.isArray(child)) {
      child.forEach((element) => {
        console.log(element);
        if (element !== null) {
          let container = document.createElement(element.type);

          if (element.attributes) {
            this.attributesHandler(container,element.attributes);
          }

          if (element.content) {
           const content= element.content;
            container.innerText=this.propsHandler(content);
                 
          }

          if (element.children) {
            console.log(element.children);
            this.createChildren(container, element.children);
          }

          parent_element.appendChild(container);
        }
      });
    } else {
      throw new Error("invalid child, childeren  must  be an array");
    }
  }

  
  propsHandler(content){
if(Array.isArray(content)){
  if(content[1]==undefined){
   throw new Error("undefined props passed")
  }
   return content[0]+content[1];
}else{
  return content;
}
 
  }

}
export default CreateElement;
