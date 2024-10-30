export default function Render(components){
const  Rootdiv = document.getElementById("root");
const Handle={
   apply:function(fn,Property,args){
     return[Property,args];
   }
}
components.forEach(element => {
   Rootdiv.appendChild(element); 
});
}