// question = input("WHAT IS YOUR NAME? ")

// print( "HELLO, %s! \nYOUR NAME HAS %s LETTERS IN IT, FYI." % (question.upper(), len(question)) ) 

let userName = prompt("What is your name?")
userName = userName.toUpperCase()
nameLength = userName.length
console.log(`HELLO ${userName}. YOUR NAME HAS ${nameLength} LETTERS IN IT, FYI!`)