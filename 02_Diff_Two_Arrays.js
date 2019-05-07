function diffArray(arr1, arr2) {
 var newArr = [];

 newArr = newArr.concat(arr1);

   for (let i = 0; i < arr2.length; i++) {
     if (arr1.indexOf(arr2[i]) < 0) {
       newArr.push(arr2[i]);
     } else {
       newArr.splice(newArr.indexOf(arr2[i]), 1);
     }
   }

 // Same, same; but different.
 return newArr;
}

