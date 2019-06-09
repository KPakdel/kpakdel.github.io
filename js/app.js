var slide =document.getElementsByClassName("slides")

slide[0].style.display = "none";
slide[1].style.display = "none";
slide[2].style.display = "none";

var n =0

slide[n].style.display="block"


var slideTime = setInterval(nextSlide,5000);

function nextSlide() {
    
    if (n<2) {n=n+1;


slide[n].style.display="block"
var i=n+2

console.log (i)
slide[n-1].style.display="none"



}
else {n=0
    slide[0].style.display = "block";
    slide[2].style.display = "none";} 
    

}


