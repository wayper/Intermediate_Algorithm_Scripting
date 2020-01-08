
function dropElements(arr, func) {

 let newArr = [];

 for (let i = 0; i < arr.length; i++) {
     if (func(arr[i])) {
       newArr = arr.slice(i);
       console.log(newArr)
       return newArr;
     }
 }

 // Drop them elements.
 return newArr;
}

