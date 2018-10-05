// totalBill = int(input("How much is the total bill?"))
// service = input("How was the service: good, fair, or bad?")
// eaters = int(input("How many ways do you need to split the bill?"))
// try:
//     if service == "good":
//         tip = totalBill * .2
//         experience = "awesome"
//     elif service == "fair":
//         tip = totalBill * .15
//     elif service == "bad":
//         tip = totalBill * .1
//     totalWithTip = (totalBill + tip)   
//     each = totalWithTip/ eaters
//     print("You should add $%.2f for the tip, which brings your final total to $%.2f, or $%.2f per person, and you had a %s time." % (tip, totalWithTip, each, exoerience))
// except:
//     print("Sorry, can't help you unless you answer the question with one of those options.")

let totalBill = parseInt(prompt("How much is the total bill?"));
let service = prompt("How was the service: good, fair, or poor?");
let each = parseInt(prompt("How many people are splitting the bill?"));
if (service === "good") {
    tip = totalBill * .2;
} else if (service === "fair") {
    tip = totalBill * .15;
} else if (service === "poor") {
    tip = totalBill * .10;
} else {
    console.log("Sorry, can't help you unless you answer the question with one of those options.");
}
totalWithTip = totalBill + tip;
each = totalWithTip/each;
console.log(`You should add ${tip} for the tip, which brings your final bill to ${totalWithTip}, or ${each} per person, and you had a ${service} time.`);
