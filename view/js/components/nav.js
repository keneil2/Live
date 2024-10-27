import CreateElement from "./../../../src/CreateElement.js";
// todo:make it possible to have nested child elements
let prop=0;
const Nav = () => {
  const elementCreator = new CreateElement({
    type: "nav",

    attributes: { class: "flex w-full p-4 items-center bg-black text-white",
      onclick:()=>{
         prop++;
         console.log(prop)
      }

     },
     
    children: [
      {
        type: "ul",
        children: [
          {
            type: "li",
            children: [
              {
                attributes: {
                  href: "signup",
                },
                props:{
                  count:0,
                },
                type: "a",
                content: `sign up ${count}`,
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
        attributes:{class:"flex gap-10"}
      },
    ],
  });
  return elementCreator.create();
};

export default Nav;
