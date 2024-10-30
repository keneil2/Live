import CreateElement from "./../../../src/CreateElement.js";
// todo:make it possible to have nested child elements
let prop=0;
const Nav = (prop) => {
let count=0;  
let props={
    
      count:prop
     
  }
  
  const elementCreator = new CreateElement({
    type: "nav",

    attributes: { class: "flex w-full p-4 items-center bg-black text-white",
      onclick:()=>{
         count++;
      }
     },
    children: [
      {
        type: "ul",
        attributes:{class:"flex gap-10"},
        children: [
          {
            type: "li",
            children: [
              {
                attributes: {
                  href: `signup`,
                },
               
                type: "a",
                content: [`sign up `, props.count],
              },
            ],
          },
          {
            type: "li",
            children: [
              {
                attributes: {
                  href: "https://www.google.com",
                },
                type: "a",
                content: "login",
              },
            ],
          },
        ],
      },
    ],
  },props);
  return elementCreator.create();
};

export default Nav;
