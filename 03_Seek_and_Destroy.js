function destroyer(arr) {
 // Remove all the values
var newArr = [];
var arg = [];

  for (let j = 1; j < arguments.length; j++) {
      arg.push(arguments[j]);
  }


  for (let i = 0; i < arr.length; i++) {
    if (arg.indexOf(arr[i]) < 0) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

