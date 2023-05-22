var click=document.getElementById("tog");
var toggle=(elem)=>{
 var type=click.getAttribute('type');
 if(type=="password"){
    click.setAttribute("type","text");
    elem.innerText="Hide password";
 }
 else{
    click.setAttribute("type","password");
    elem.innerText="Show password";
 }
    
}