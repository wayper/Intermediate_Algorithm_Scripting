function truthCheck(collection, pre) {
 // Is everyone being true?
 let arrCheck = [];

 for (let i = 0; i < collection.length; i++) {
   if (pre in collection[i]) {
     if (collection[i][pre]) {
         arrCheck.push(true);
     } else {
         arrCheck.push(false);
     }    
   } else {
     arrCheck.push(false);
   }
 }
 function isTrue(item) {
 return item === true;
}
if (arrCheck.every(isTrue)) {
  pre = true;
} else {
  pre = false;
}
console.log(arrCheck);
console.log(pre);
 return pre;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age");

