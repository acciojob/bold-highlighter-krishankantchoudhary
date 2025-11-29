let para=document.querySelectorAll("strong");
let link=document.querySelector("a");
link.addEventListener("onmouseover",highlight);
link.addEventListener("onmouseout",return_normal);

function highlight() {
    //Write your code here
	para.forEach((strong)=>strong.style.color="rgb(0,128,0)")
}


function return_normal() {
    //Write your code here
	para.forEach((strong)=>strong.style.color="rgb(0, 0, 0)")

    
}
