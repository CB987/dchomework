// totalBill = float(input("How much is the total bill?"))
// service = input("How was the service: good, fair, or bad?")
// try:
//     if service == "good":
//         tip = totalBill * .2
//     elif service == "fair":
//         tip = totalBill * .15
//     elif service == "bad":
//         tip = totalBill * .1
//     totalWithTip = (totalBill + tip)    
//     print("You should add $%.2f for the tip, which brings your final total to $%.2f." % (tip, totalWithTip))
// except:
//     print("Sorry, can't help you unless you answer the question with one of those options.")

let totalBill = Number(prompt(`How much is the total bill?`)).toFixed(2);
let service = prompt(`How was the service: good, fair, or poor?`)
if (service === `good`) {
    tip = totalBill * .2
} else if (service === `fair`) {
    tip = totalBill * .15
} else if (service === `poor`) {
    tip = totalBill * .10
} else {
    console.log(`Sorry, can't help you unless you answer the question with one of those options.`)
}
// totalWithTip = totalBill + tip
console.log(`You should add ${(tip).toFixed(2)} for the tip, which brings your final bill to ${Number(totalBill + tip).toFixed(2)}.`)

  