const sbiBank = {
    bankName: 'SBI',
    location:'Pune',
    accountNo: 1234,
    ifsc: 'sb1234567',
    interestRate: 7,

    showDetails : function() {
        console.log(`BankName: ${this.bankName}, locates at ${this.location},accountNo: ${this.accountNo}, ifsc: ${this.ifsc}, rateOfInterest: ${this.interestRate}`);
    }
}

const axisBank = {
    bankName: 'AXIS',
    location:'Pune',
    accountNo: 7890,
    ifsc: 'Ax1234567',
    interestRate: 6,
    showDetails : function() {
        console.log(`BankName: ${this.bankName}, locates at ${this.location},accountNo: ${this.accountNo}, ifsc: ${this.ifsc}, rateOfInterest: ${this.interestRate}`);
    }
}

const yesBank = {
    bankName: 'YESBank',
    location:'mumbai',
    accountNo: 2678,
    ifsc: 'YB1234567',
    interestRate: 5,
    showDetails : function() {
        console.log(`BankName: ${this.bankName}, locates at ${this.location},accountNo: ${this.accountNo}, ifsc: ${this.ifsc}, rateOfInterest: ${this.interestRate}`);
    }

}


sbiBank.showDetails();
axisBank.showDetails();
yesBank.showDetails();
