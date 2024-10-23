export default function Render(components){
const  Rootdiv = document.getElementById("root");
components.forEach(element => {
   Rootdiv.appendChild(element); 
});

}