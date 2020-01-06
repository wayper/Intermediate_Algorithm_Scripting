function sumFibs(num) {

 let newArr = [0];
 let nextNumber = 1;

for (let i = 0; (newArr[i] + nextNumber) <= num; i++) {
   newArr.push(newArr[i] + nextNumber);
   nextNumber = newArr[i];
}
 let result = 0;

for (let j = 0; j < newArr.length; j++) {
 if (newArr[j] % 2 != 0) {
     result += newArr[j];
 }
}

console.log(newArr);
console.log(result);

 return result;
}

sumFibs(75025);
