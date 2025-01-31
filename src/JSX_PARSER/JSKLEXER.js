class JSKLexer {
  constructor(input) {
    this.input = input;
    this.tokens = [];
    this.state = "NONE";
  }

  tokenizer() {
    let ac = "";
    let count = 0;
    const startingTagRegex =/<[a-zA-Z0-9]+(\s+([\w-]+)=['"]([^'"]*)['"])*\s*>/g;
    const endingTagRegex = /<\/+[a-zA-Z0-9]+>/g;
    const ContentRegex = /{.+}/;

    for (let i = 0; i <= this.input.length-1; i++) {
      let match;
      const char = this.input[i]; 
      ac += char;
      if (match = startingTagRegex.exec(ac)) {
        this.tokens.push({ type: "JSK_START_TAG", name: match[0] });
        ac = "";
      } else if (match = endingTagRegex.exec(ac)) {
        this.tokens.push({ type: "JSK_CLOSING_TAG", name: match[0] });
        ac = "";
      } else if (match = ContentRegex.exec(ac)) {
        this.tokens.push({ type: "JSK_TEXT", name: match[0] });
        ac = "";
      }
    }
    console.log("jsx parser",this.tokens);
    return this.tokens;
  }
}

export default JSKLexer;