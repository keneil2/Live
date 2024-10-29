import CreateElement from "./../../../src/CreateElement.js";
// todo:make it possible to have nested child elements
let prop=0;
const Nav = (props) => {
  const elementCreator = new CreateElement({
    type: "nav",

    attributes: { class: "flex w-full p-4 items-center bg-black text-white",
      onclick:()=>{
         prop++;
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
                content: `sign up {props.count}`,
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
  },{
   count:0
  });
  return elementCreator.create();
};

export default Nav;
