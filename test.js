const Loanee = require('./loanee');

let loanee = new Loanee();

// Test if first name passed in will be equal to the first name that is stored;
function testFirstName (){
    console.log(`Testing first name..`)
    const FIRSTNAME = 'Alson';

    // Set this.loanAmount to loan amount
    loanee.setFirstName(FIRSTNAME);

    // Test whether passed in loanAmount is now equal to this.loanAmount
    if (FIRSTNAME === loanee.getfirstName()) {
        console.log(`First name passed in is EQUAL to this.firstName!`)
    } else {
        console.log(`* ERROR * First Name is NOT EQUAL to this.firstName!`)
    }
    console.log(`* First name test complete * \n`)
}

testFirstName();

// Test if last name passed in will be equal to the last name that is stored;
function testLastName (){
    console.log(`Testing last name..`)
    const LASTNAME = `Shareef`;

    // Set this.loanAmount to loan amount
    loanee.setLastName(LASTNAME);

    // Test whether passed in loanAmount is now equal to this.loanAmount
    if (LASTNAME === loanee.getLastName()) {
        console.log(`Last name passed in is EQUAL to this.lastName!`)
    } else {
        console.log(`* ERROR * Last Name is NOT EQUAL to this.lastName!`)
    }
    console.log(`* Last name test complete * \n`)
}

testLastName();

// Test if email passed in will be equal to the email that is stored;
function testEmail (){
    console.log(`Testing email..`)
    const EMAIL = 'alson.shareef@gmail.com';

    // Set this.loanAmount to loan amount
    loanee.setEmail(EMAIL);

    // Test whether passed in loanAmount is now equal to this.loanAmount
    if (EMAIL === loanee.getEmail()) {
        console.log(`Email passed in is EQUAL to this.email!`)
    } else {
        console.log(`* ERROR * Email is NOT EQUAL to this.email!`)
    }
    console.log(`* Email test complete * \n`)
}

testEmail();

// Test if loan amount passed in will be equal to the loan amount that is stored;
function testLoanAmount (){
    console.log(`Testing loan amount..`)
    const LOANAMOUNT = 50;

    // Set this.loanAmount to loan amount
    loanee.setLoanAmount(LOANAMOUNT);

    // Test whether passed in loanAmount is now equal to this.loanAmount
    if (LOANAMOUNT === loanee.getLoanAmount()) {
        console.log(`Loan amount passed in is EQUAL to this.loanAmount!`)
    } else {
        console.log(`* ERROR * Loan amount is NOT EQUAL to this.loanAmount!`)
    }
    console.log(`* Loan amount test complete * \n`)
}

testLoanAmount();