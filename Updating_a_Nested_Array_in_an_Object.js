// Create a JavaScript function named updateNestedArray.
// This function should take three parameters:

// an object
// a number
// and a string.
// The object contains a nested array of strings. 
// The function should update the element in the array at the index 
// specified by the number parameter to the value provided by the string 
// parameter.
// After updating, the function should return the modified object.

function updateNestedArray(object, number, string) {
    let arrayOfFruits = object.fruits
    arrayOfFruits[number] = string
    return object
}
console.log(updateNestedArray({'fruits':['apple','banana']},1,'cherry'));
// console.log(a.isOK)

// console.log(updateNestedArray(a, 2, "cherry")) 

// let b = {"fruits": ["pineapple", "strawberry"]}
// console.log(updateNestedArray(b, 0, "kiwi"))

// // console.log(updateNestedArray({'fruits':['apple','banana']},1,'cherry'));

// let c = {"fruta": ["pineapple", "strawberry", "banana"]}
// console.log(updateNestedArray(c, 0, "durian"))