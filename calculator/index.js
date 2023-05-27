let dis=document.getElementById("dpy");
let btn=document.querySelectorAll('button');
let arr=Array.from(btn);
let data="";
arr.forEach(ele => {
    ele.addEventListener('click',(e)=>{
      
      
        if(e.target.innerHTML=='='){
           data=eval(data);
           dis.value=data;
        }
        else if(e.target.innerHTML=='AC'){
            data="";
            dis.value=data;
        }
        else if(e.target.innerHTML=='DEL'){
            data=data.substring(0,data.length-1);
            dis.value=data;
        }
        else{
            data+=e.target.innerHTML;
            dis.value=data;
        }
    })
});