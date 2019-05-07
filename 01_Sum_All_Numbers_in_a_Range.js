function sumAll(arr) {

    if (arr[0] < arr[1]) {
    var result = arr[0];
    for (let i = 1; i < arr[1] - arr[0] + 1; i++) {
      result += arr[0] + i;
    }
   } else {
    var result = arr[1];
    for (let i = 1; i < arr[0] - arr[1] + 1; i++) {
      result += arr[1] + i; 
   }
   }
    return result;
   }
   
   console.log(sumAll([10, 5]));