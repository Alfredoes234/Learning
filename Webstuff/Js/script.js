// wowowowowo
/*
If you want a general rule: always declare variables with const.
If you think the value of the variable can change, use let.
*/

"use strict"

const n = 5
// ^cannot be reassigned
const mell = "Shmello"
const milk = {flavour:"Strawberry", type:"Full Fat", price:2.50}
const cars = ["Volvo", "BMW"]
cars[0] = "Ferrari"
cars.push("Ford")
//alert(cars.length) <-- length of car array
        
let p = n + 6
// ^Cannot be redeclared

var firstName = "John", lastName = "Paul", age = 26
// x = 10
// y = 5
//x += y;
//x *= y;
//alert(x);
//^Onscreen popup

function hero() {
    return "Hello"
}
//alert(milk.flavour + " Is yummy & costs " + milk.price)
//shorter function
let hello = ""
hello = () => {
    return hello
}

let l = mell.length
//alert(l)
//alert("We are\"vikings\"")
// The Backslash is an escape character that allows a "" in ""
// Slicing for getting number include whitespace

mell.replace("Shmello", "Trello")
let s = Number.MAX_SAFE_INTEGER
//alert(s) ^it gives you the highest possible safe integer in js

n.toString()
// ^Converts to string

cars.pop()
// ^Removes the last item in the array

cars.push("Ferrari")
// ^Adds value to the end of the array
// .splice is used to get rid of specific objects in an array and is used using the reference
// numbers such as [pan, pot, sink] pan = 0 in the array and pot = 1 in the array because
// arrays always start from 0 and .slice creates a new array without the object referenced

cars.sort()
cars.reverse()
// Sort sorts it to alphabetical order and reverse reverses it

const dat = new Date()
// ^Grabs the current date from the browser and you make it show certain dates
const year = dat.getFullYear()
const month = dat.getMonth()
const hours = dat.setMilliseconds(142)

let r = Math.random()
// Math.max(10, 20) would give 20 because its the largest number
console.log(r) //^ Gives you a random number with the math function

let o = (age < 18) ? "Too young": "Old enough"
console.log(o) //^ Compares the values and does something based on that can be used in conjunction
// with if else statements
if (age == 18) {
    let fun =  "You looking fine gyat damn"
    console.log(fun)
} else if (age == 26) {
    let wow = "You a cool boy"
    console.log(wow)
} else {
    let nof =  "To early..."
    console.log(nof)
}

/*
switch(fruits) {
    case "Banana":
        console.log("Hello")
        break;
    case "Apple":
        console.log("Welcome")
        break;   
    default:
        console.log("WOW");
}
// ^Gives you a different answer based on what you entered
*/

let i = 0
for (i=0; i < 10; i++) {
    console.log(i)
    if (i == 5) {
        continue
    } else if (i == 6) {
        break
    }
}
// For loops can also iterate through arrays and the if makes it stop the loop at 5 using
// break

/*
let h = 0
while (h < 10) {
    console.log(i)
    i++
}
loops infinitely if h is less thn 10
*/

class car {
    constructor(name, year) {
        this.name = name
        this.year = year
    }
}

const mycar = new car("Audi", 2019)
console.log(mycar)

document.getElementById("smeno").innerHTML = p
document.getElementById("hell").innerHTML = hello()
document.getElementById("demo").innerHTML = hero()
document.getElementById("plen").innerHTML = milk.flavour
document.getElementById("stra").innerHTML = cars.toString()
document.getElementById("date").innerHTML = dat
document.getElementById("mca").innerHTML = mycar
// ^Searches for elements which have the specified id tag and replace them with the defined
// option
