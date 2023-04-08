var btnRestart = document.querySelector("#restart");

var places2 = document.querySelectorAll("td");

btnRestart.addEventListener("click", function () {
    for (place of places2) {
        place.textContent = ""
    }
});

function changeMarker(){
    if(this.textContent === ""){
        this.textContent = "X";
    }else if (this.textContent === "X"){
        this.textContent = "O"
    }else{
        this.textContent = ""
    }
}

for (place of places2){
    place.addEventListener("click", changeMarker);
}

// var place1 = document.querySelector("#one");
// var place2 = document.querySelector("#two");
// var place3 = document.querySelector("#three");
// var place4 = document.querySelector("#four");
// var place5 = document.querySelector("#five");
// var place6 = document.querySelector("#six");
// var place7 = document.querySelector("#seven");
// var place8 = document.querySelector("#eight");
// var place9 = document.querySelector("#nine");

// var places = [place1, place2, place3, place4, place5, place6, place7, place8, place9];



// place1.addEventListener("click", function () {
//     if (place1.textContent == "") {
//         place1.textContent = "X";
//     } else if (place1.textContent == "X") {
//         place1.textContent = "O";
//     } else if (place1.textContent == "O") {
//         place1.textContent = "";
//     } else {
//         place1.textContent = ""
//     }
    
// })
// place2.addEventListener("click", function () {
//     if (place2.textContent == "") {
//         place2.textContent = "X";
//     } else if (place2.textContent == "X") {
//         place2.textContent = "O";
//     } else if (place2.textContent == "O") {
//         place2.textContent = "";
//     } else {
//         place2.textContent = ""
//     }

// })
// place3.addEventListener("click", function () {
//     if (place3.textContent == "") {
//         place3.textContent = "X";
//     } else if (place3.textContent == "X") {
//         place3.textContent = "O";
//     } else if (place3.textContent == "O") {
//         place3.textContent = "";
//     } else {
//         place3.textContent = ""
//     }

// })
// place4.addEventListener("click", function () {
//     if (place4.textContent == "") {
//         place4.textContent = "X";
//     } else if (place4.textContent == "X") {
//         place4.textContent = "O";
//     } else if (place4.textContent == "O") {
//         place4.textContent = "";
//     } else {
//         place4.textContent = ""
//     }

// })
// place5.addEventListener("click", function () {
//     if (place5.textContent == "") {
//         place5.textContent = "X";
//     } else if (place5.textContent == "X") {
//         place5.textContent = "O";
//     } else if (place5.textContent == "O") {
//         place5.textContent = "";
//     } else {
//         place5.textContent = ""
//     }

// })
// place6.addEventListener("click", function () {
//     if (place6.textContent == "") {
//         place6.textContent = "X";
//     } else if (place6.textContent == "X") {
//         place6.textContent = "O";
//     } else if (place6.textContent == "O") {
//         place6.textContent = "";
//     } else {
//         place6.textContent = ""
//     }

// })
// place7.addEventListener("click", function () {
//     if (place7.textContent == "") {
//         place7.textContent = "X";
//     } else if (place7.textContent == "X") {
//         place7.textContent = "O";
//     } else if (place7.textContent == "O") {
//         place7.textContent = "";
//     } else {
//         place7.textContent = ""
//     }

// })
// place8.addEventListener("click", function () {
//     if (place8.textContent == "") {
//         place8.textContent = "X";
//     } else if (place8.textContent == "X") {
//         place8.textContent = "O";
//     } else if (place8.textContent == "O") {
//         place8.textContent = "";
//     } else {
//         place8.textContent = ""
//     }

// })
// place9.addEventListener("click", function () {
//     if (place9.textContent == "") {
//         place9.textContent = "X";
//     } else if (place9.textContent == "X") {
//         place9.textContent = "O";
//     } else if (place9.textContent == "O") {
//         place9.textContent = "";
//     } else {
//         place9.textContent = ""
//     }

// })
