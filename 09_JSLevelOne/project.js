var first = prompt("First Name: ")
var last = prompt("Last Name: ")
var height = prompt("height: ")
var pet = prompt("Pet Name: ")


if (first[0] == last[0] && height >= 170 && pet[pet.length-1] == "y") {
    console.log("secret message");
}