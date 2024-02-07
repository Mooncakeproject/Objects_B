// Your task is to create a function called markAsPaid.
// This function should take an object as its only 
// parameter (a bill), update the status property of the 
// bill to paid, and then return the updated object.

function markAsPaid(bill) {
    bill.status = "paid";
    return bill;
}
console.log(markAsPaid({'total':'105','status':'pending'}));
