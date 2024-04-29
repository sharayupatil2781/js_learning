const bankSBI = {
    bankName: 'SBI',
    branch: 'hinjawadi',
    ROI: 5,
    Amount: 10000,


}

const bankLocation = {
    city: 'Pune',
    street: 'hinjwadi',
    pincode: 411057
}

//===========================Q3=====================
const clonedObject = Object.assign({},bankSBI,bankLocation);
console.log(`Cloned object is: `);
console.log(clonedObject);

//==============================Q4====================
const rateOfInterest = {
    homeLoanInterest: 7,
    personalLoanInterest: 8,
    dueInterest: 10
}

//=========================Q5===========================
const sbiDetails = Object.assign({}, bankSBI,bankLocation,rateOfInterest);
console.log(sbiDetails);
console.log(Object.keys(sbiDetails));

//========================Q6================================
for (const key in sbiDetails) {
    console.log(`${key} => ${sbiDetails[key]}`);
}