const readlineSync = require('readline-sync');
const Loanee = require('./loanee');
// TODO **********
// How long they want to take the loan out for
// Include Add, List, Delete functionality

let loanee = new Loanee();

if (readlineSync.keyInYN(`Hi there, would you like to take out a loan? `)) {
    // 'Y' key was pressed.
    // Find out loanee name
    let firstName = readlineSync.question('Alright, what is your first name? ');
    loanee.setFirstName(firstName);

    let lastName = readlineSync.question('And your last name? ');
    loanee.setLastName(lastName);

    console.log(`Nice to meet you ${firstName} ${lastName}`);

    // Get their email
    let email = readlineSync.questionEMail(`Please enter your email too: `);
    loanee.setEmail(email);

    // Find out how much they want to take out
    let calcLoan = () => {
        let loanAmount = '$' + readlineSync.question('How much money would you like to take out? ');
        loanee.setLoanAmount(loanAmount);
    
        if (readlineSync.keyInYN(`Are you sure that you would like to take out ${loanAmount}?`)) {
            loanee.setLoanDate();
            return console.log(`Great! ${firstName}, you have taken out ${loanAmount} at ${loanee.getLoanDate()}`)
        } else {
            console.log(`** Please enter the amount you would like to take out **`);
            calcLoan();
        }
    }
    calcLoan();

  } else {
    // Another key was pressed.
    console.log(`Okay, see ya!`);
  }

  loanee.prettyPrint();
