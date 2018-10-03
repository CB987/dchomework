totalBill = float(input("How much is the total bill?"))
service = input("How was the service: good, fair, or bad?")
try:
    if service == "good":
        tip = totalBill * .2
    elif service == "fair":
        tip = totalBill * .15
    elif service == "bad":
        tip = totalBill * .1
    totalWithTip = (totalBill + tip)    
    print("You should add $%.2f for the tip, which brings your final total to $%.2f." % (tip, totalWithTip))
except:
    print("Sorry, can't help you unless you answer the question with one of those options.")