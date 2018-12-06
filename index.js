const readlineSync = require('readline-sync');

// TODO **********
// How long they want to take the loan out for
// Include Add, List, Delete functionality

if (readlineSync.keyInYN(`Hi there, would you like to take out a loan? `)) {
    // 'Y' key was pressed.
    // Find out loanee name
    let firstName = readlineSync.question('Alright, what is your first name? ');
    let lastName = readlineSync.question('And your last name? ');
    console.log(`Nice to meet you ${firstName} ${lastName}`);

    // Get their email
    let email = readlineSync.questionEMail(`Please enter your email too: `);

    // Find out how much they want to take out
    function calcLoan (){
        let loanAmount = '$' + readlineSync.question('How much money would you like to take out? ');
        if (readlineSync.keyInYN(`Are you sure that you would like to take out ${loanAmount}?`)) {
            return console.log(`Great! ${firstName}, you have taken out ${loanAmount} at ${loanDate()}`)
        } else {
            console.log(`** Enter the amount you would like to take out please **`);
            calcLoan();
        }
    }
    calcLoan();

  } else {
    // Another key was pressed.
    console.log(`Okay, see ya!`);
  }

// Calculate time loan was taken out
function loanDate (){
    let date = new Date();
    let hours, minutes, seconds;
    hours = date.getHours() - 12;
    minutes = date.getMinutes();
    let AM_PM = date.getHours() < 12 ? 'AM' : 'PM'

    let time = `${hours}:${minutes} ${AM_PM}`

    return time;
}

