class CreateElement {
  /**
   * @param {*} element
   * @param {*} childrenContent children content
   * @param {*} Class
   * @param {*} props
   * @param {*} children if you want more than one children must be an array of elements name in the right order
   */

  // todo: pass an object instead of an the values re-write the class basically learn recursion algorithm for nested html tags
  constructor(elementObject={
    type:"",

    content:"",

   attributes:{},

   children:{

    element:{

      content:"",

      attributes:"",

      children:{

      }
    }
   }
  }) {
    this.elementObject = elementObject;
  }
  /**
   * creates all the this passed to the Create Element Constructor
   * @returns Element
   */
  create() {
    let container= null;
    if(Object.hasOwn(this.elementObject,"type")){
        let ParentElement = this.elementObject.type;
       container=document.createElement(ParentElement);
    }else{
      throw new Error("your missing the element type");
      
    }

    if(Object.hasOwn(this.elementObject,"attributes")){
       console.log(this.elementObject.attributes)
        this.propsHandler(container,this.elementObject.attributes);
    }

    if(Object.hasOwn(this.elementObject,"children")){
         this.createChildren(this.elementObject.children,container);
    }
    return container;
  }

  /**
   * handle props
   * @param {*} element
   */
  propsHandler(element,props) {
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

        // Others
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
  createChildren(child, parent_element) {
  
    if( typeof child == "object"){
     let  children=Object.entries(child);

   
      let container=document.createElement(children[0][0]);

  if(children[0][1].attributes){
      this.propsHandler(container,children[0][1].attributes);
     }

      container.innerText=children[0][1].content.replace('"','');

      if(children[0][1].children){

      this.createChildren(children[0][1].children,container);
      
      }
      

      parent_element.appendChild(container);
    }else{
      throw new Error("invalid child, childeren  must  be an object");
      
    }
      
































    // if (Array.isArray(element)) {
    //   let child = document.createElement(element[0]);
    //   const textNode = document.createTextNode(element[1]);
    //   child.appendChild(textNode);
    //   parent_element.appendChild(child);
    // } else {
    //   if (Object.entries(element)[0][0] !== "0") {
    //     // console.log(typeof Object.entries(element)[0][0]);
    //     console.log(Object.entries(element)[0][0]);
    //     let child = document.createElement(Object.entries(element)[0][0]);
    //     const textNode = document.createTextNode(Object.entries(element)[0][1]);
    //     child.appendChild(textNode);
    //     parent_element.appendChild(child);
    //   }

      // child.appendChild(textNode);
      // parent_element.appendChild(child);
    }
  }
// }
export default CreateElement;
