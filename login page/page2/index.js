let str0=document.getElementsByClassName("pass")[0];
let str1=document.getElementsByClassName("pass")[1];
 let chan=document.getElementById("change");
 let toggle=()=>{
 let tg0= str0.getAttribute("type");
  let tg1= str1.getAttribute("type");
   if(tg0=="password" && tg1=="password"){
   str0.setAttribute("type","text");
       str1.setAttribute("type","text");
       chan.innerText="Hide password";
   }
   else{
      str0.setAttribute("type","password");
       str1.setAttribute("type","password");
        chan.innerText="Show password";
   }
 };