import CreateElement from "./../../../src/CreateElement.js";
// todo:make it possible to have nested child elements
const Nav = () => {
  const elementCreator = new CreateElement(
    {
      type:"div",

      content:"please left and right is right",
      
      attributes:{class:"this is me lol"},

      children:{
         div:{
            content:"please left this on the car please",
            attributes:{
               class :"not a class"
            },
            children:{
               span:{
                  content:"this is a span tag help me !!!",
                  attributes:{
                     class:"this is a class"
                  }
               }
            }
         }
      }

    }
  );
  return elementCreator.create();
};

export default Nav;
