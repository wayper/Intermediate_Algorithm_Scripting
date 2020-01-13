function addTogether() {

 let numOne = arguments[0];
 let sum = 0;

 if (typeof(numOne) == "number") {
     if (arguments.length == 1) {
         return function (numTwo) {
             if (typeof(numTwo) == "number") {
               return sum = numOne + numTwo;
             } else {
               return sum = undefined;
             }}
     } else if (typeof(arguments[1]) == "number") {
           sum = arguments[0] + arguments[1];       
       } else {
           return sum = undefined;         
     }
       return sum;
 } else {
   return sum = undefined;
 }
}

console.log(addTogether(1,3));

