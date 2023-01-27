const firstEx=document.querySelector(".first");
const secondEx=document.querySelector(".second");

const first=document.querySelectorAll(".first");
const second=document.querySelectorAll(".second");

function slide(){
    if (firstEx.style.display === "none"){
        first.forEach((el)=>{
            el.style.display="block";
        })
        second.forEach((e)=>{
            e.style.display="none";
        })
    }
    else{
        first.forEach((el)=>{
            el.style.display="none";
        })
        second.forEach((e)=>{
            e.style.display="block";
        })
    }

}