class Loanee {
    constructor(){
        this.firstName = ''
        this.lastName = ''
        this.email = ''
        this.loanAmount = 0
        this.loanDate = ''
    }

    getfirstName (){
        return this.firstName;
    }

    setFirstName (firstName){
        this.firstName = firstName;
    }

    getLastName (){
        return this.lastName;
    }
    
    setLastName (lastName){
        this.lastName = lastName;
    }  

    getEmail (){
        return this.email;
    }

    setEmail(email){
        this.email = email;
    }

    getLoanAmount (){
        return this.loanAmount;
    }

    setLoanAmount (loanAmount){
        this.loanAmount = loanAmount;
    }

    getLoanDate (){
        return this.loanDate;
    }

    setLoanDate (){
        let date = new Date().toDateString()
        let time = new Date().toLocaleTimeString()
        let AM_PM = new Date().getHours < 12 ? 'AM' : 'PM';
        this.loanDate = `${date} - ${time} ${AM_PM}`;
    }

    prettyPrint (){
        console.log(`First Name : ${this.firstName}`);
        console.log(`Last Name : ${this.lastName}`);
        console.log(`Email : ${this.email}`);
        console.log(`Loan Amount : ${this.loanAmount}`);
        console.log(`Loan Date : ${this.loanDate}`);
    }
}
module.exports = Loanee;  
