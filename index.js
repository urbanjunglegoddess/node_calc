const rs = require("readline-sync");

//Ask the user, "What operation would you like to perform?"
let operation = rs.question("What operation would you like to perform?");
let operationSign = ["+", "-", "/", "*", "%"];
//Then the user enters one of these options: "/" "*" "-" "+"
//If the user enters an invalid character, print: "That is not a valid operation" and then restart the program
if (){
  
}
//After the user enters a valid operation, ask the user, "Please enter the first number"
let firstNum = rs.questionInt("Please enter the first number.");
//The user then enters the first number. If the user enters something that is not a number, print: “This is not a number” and then re-ask the question
//After a valid number is entered, ask the user, "Please enter the second number". Perform the same error handling as before
let secondNum = rs.questionInt("Please enter the second number.");
//Then create a function to perform the proper math operation and print the result as: "The result is: X" where "X" is the actual result
//Handle remainders properly (modulo). Example : 9 divided by 4 would print 2.25
//Make the program more elegant by allowing the user to enter an entire operation on one line such as: "6 / 6" or "5 * 3" (Hint use arguments to solve this)
