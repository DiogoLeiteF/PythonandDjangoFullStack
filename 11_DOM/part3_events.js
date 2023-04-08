var headOne = document.querySelector("#one")
var headTwo = document.querySelector("#two")
var headThree = document.querySelector("#three")

headOne.addEventListener('mouseover', function(){
    headOne.textContent = "Mouse Currently over";
    headOne.style.color = "red";
})

headOne.addEventListener("mouseout", function(){
    headOne.textContent = "Hover over me";
    headOne.style.color = "black";
})

headTwo.addEventListener("click", function(){
    
    if(headTwo.style.color == "black"){
        headTwo.style.color = "blue";
        headTwo.textContent = "CLICKED ON";
    }else{
        headTwo.style.color = "black";
        headTwo.textContent = "click me";
    }
})


var count = 0;
headThree.addEventListener("dblclick", function(){
    count++;
    headThree.textContent = "Double Clicked " + count + " times!" ;
})