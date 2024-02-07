// Your task is to create a function called markAsValue.
// This function should take 2 parameters: an object (a bill), 
// and a string (a value).
// The function should update the status property of the bill to 
// value parameter, and then return the updated object.

function markAsValue(bill, value) {
    bill.status = value
    return bill
}

// Example usage
console.log(markAsValue({'total':'99','status':'pending'},'accepted'));

