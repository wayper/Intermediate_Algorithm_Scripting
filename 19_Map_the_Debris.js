function orbitalPeriod(arr) {
 var GM = 398600.4418;
 var earthRadius = 6367.4447;

 let newArr = [];
 let T;

 for (let i = 0; i < arr.length; i++) {
     T = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + arr[i].avgAlt, 3)/GM));
     newArr.push({name: arr[i].name, orbitalPeriod: T});
 }

 console.log(newArr);

 return newArr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);


