const sell=[...document.querySelectorAll(".sell")];
const rent=[...document.querySelectorAll(".rent")];
const back=document.querySelector(".slider--back");
const forward=document.querySelector(".slider--forward");
const prev=document.querySelector(".slider--prev");
const next=document.querySelector(".slider--next");
sell.forEach((item) => {
    let containerDimensions=item.getBoundingClientRect();
    let width=containerDimensions.width;

    forward.addEventListener("click",()=>{
        item.scrollLeft += width; 
    })
    back.addEventListener("click",()=>{
        item.scrollLeft -= width; 
    })
})

rent.forEach((item) => {
    let containerDimensions=item.getBoundingClientRect();
    let width=containerDimensions.width;
    next.addEventListener("click",()=>{
        item.scrollLeft += width; 
    })
    prev.addEventListener("click",()=>{
        item.scrollLeft -= width; 
    })
})




