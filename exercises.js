// Exercise 1

function greeting(name) {
    console.log(`Hello ${name}`);
}

greeting("Jennifer")

//Exercise 2

const personName = prompt("What is your name?");

function hello(name) {
  if (name === ""){
 console.log("Hello World");
  }else {
  console.log(`Hello ${name}`);
  }
}

hello(personName);

//Exercise 3
function madlib(name, subject) {
    return(name + "'s favorite subject in school is " + subject + ".");
  }
  console.log(madlib("Jennifer", "math"));

//Exercise 4
const good = 0.2;
const fair = 0.15;
const bad = 0.1;

let service = prompt("How was your service? good, fair, or bad");
let bill = prompt("How much was your bill?");

function tipAmount(bill, service) {
  if (service === "good") {
    let tip1 = bill*good;
    return console.log("The tip amount is $" + tip1);
  } else if (service === "fair") {
    let tip2 = bill*fair;
    return console.log("The tip amount is $" + tip2);
  } else if (service === "bad") {
    let tip3 = bill*bad;
    return console.log("The tip amount is $" + tip3);
  } else {
    return console.log("You did not enter something correctly");
  }
}
tipAmount(bill, service);

// //Another option
// switch(service) {
//     case "good":
//       console.log("Service was good");
//       break
//       case "bad":
//       console.log("Service was bad");
//       break
//     default:
//       console.log("Service wasn't ranked")
//   }

//Exercise 5
const good = 0.2;
const fair = 0.15;
const bad = 0.1;

let service = prompt("How was your service? good, fair, or bad");
let bill = prompt("How much was your bill?");

function tipAmount(bill, service) {
  if (service === "good") {
    let total1 = Number(bill) + Number(bill*good);
    return console.log("Your total bill including tip is $" + total1);
  } else if (service === "fair") {
    let total2 = Number(bill) + Number(bill*fair);
    return console.log("Your total bill including tip is $" + total2);
  } else if (service === "bad") {
    let total3 = Number(bill) + Number(bill*bad);
    return console.log("Your total bill including tip is $" + total3);
  } else {
    return console.log("You did not enter something correctly");
  }
}
tipAmount(bill, service);

//Exercise 6
const good = 0.2;
const fair = 0.15;
const bad = 0.1;

let service = prompt("How was your service? good, fair, or bad");
let bill = prompt("How much was your bill?");
let people = prompt("How many ways would you like to split the bill?")

function tipAmount(bill, service, people) {
  if (service === "good") {
    let total1 = (Number(bill) + Number(bill*good))/Number(people);
    return console.log("Your total bill including tip is $" + total1.toFixed(2));
  } else if (service === "fair") {
    let total2 = (Number(bill) + Number(bill*fair))/Number(people);
    return console.log("Your total bill including tip is $" + total2.toFixed(2));
  } else if (service === "bad") {
    let total3 = (Number(bill) + Number(bill*bad))/Number(people);
    return console.log("Your total bill including tip is $" + total3.toFixed(2));
  } else {
    return console.log("You did not enter something correctly");
  }
}
tipAmount(bill, service, people);
  