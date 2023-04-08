// PART 4 ARRAY EXERCISE
// This is  a .js file with commented hints, its optional to use this.
alert("hello");
// Create Empty Student Roster Array
// This has been done for you!
var roster = []

// Create the functions for the tasks

// ADD A NEW STUDENT


// Create a function called addNew that takes in a name
// and uses .push to add a new student to the array
function addNew(student, arr) {
    arr.push(student);
}

// REMOVE STUDENT

// Create a function called remove that takes in a name
// Finds its index location, then removes that name from the roster

// HINT: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
//

function removeStudent(student, arr) {
    var studentIndex = arr.indexOf(student);

    if (studentIndex == -1) {
        alert(student + " ==> no such student in the list")
    } else {
        arr.splice(studentIndex, 1);
    }
}

// DISPLAY ROSTER

// Create a function called display that prints out the orster to the console.
function display(arr) {
    for (n of arr) {
        console.log(n);
    }
}

// Start by asking if they want to use the web app
var useApp = prompt("Would you like to start the roster web app?");
// Now create a while loop that keeps asking for an action (add,remove, display or quit)
// Use if and else if statements to execute the correct function for each command.
if (useApp.toLowerCase() == "y") {
    var answer = "";
    var student = "";
    while (true) {
        answer = prompt("Do you wnat to add,remove, display or quit");
        answer = answer.toLowerCase();
        if (answer == "add") {
            student = prompt("enter the name to add: ");
            addNew(student, roster);
        } else if (answer == "remove") {
            student = prompt("enter the name to remove: ");
            removeStudent(student, roster);
        } else if (answer == "display") {
            display(roster);
        } else if (answer == "quit") {
            break;
        } else {
            alert("Wrong input, please try again...");
        }
    }
}