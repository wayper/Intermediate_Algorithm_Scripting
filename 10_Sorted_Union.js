function uniteUnique(arr) {

 let newArr = [];

   for (let i = 0; i < arguments.length; i++) {

       for (let j = 0; j < arguments[i].length; j++) {

           let arrIntermediate = [];

           for (let k = 0; k < newArr.length; k++) {
 
               if (arguments[i][j] == newArr[k]) {
                     arrIntermediate.push(true);
               } else {
                     arrIntermediate.push(false);
               }
           }

               if (arrIntermediate.every(function (value) {
                  return value == false;})) {
                     newArr.push(arguments[i][j]);
                 };
       }
   }

console.log(newArr);

 return newArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
