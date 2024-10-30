const JSX_STRING=/(\s*<.*>\s)/gs
const JSX_INTERPOLATION=/\{+[A-Za-z0-9]+}+\*/gs
const QOUTED_STRING= /["|'](.*)["|']/gs


export default function getAttributes(){
    
    const attrsStr="<h1 className='hello' Hello </h1>";
    if(attrsStr.trim().length == 0) return {};
    let array=attrsStr.split(" ");
    let objAttribute={};

    array.forEach((p)=>{

   let  [attriName,Value]=p.split("=");

     objAttribute[attriName]=Value

    });
    
    return  objAttribute;
}
