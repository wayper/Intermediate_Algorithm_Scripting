function binaryAgent(str) {

 let arrBinarySystem = str.split(" ");

 let  arrDecimalSystem = arrBinarySystem.map(function(item) {
 return parseInt(item, 2);
 });

 let arrSymbol = arrDecimalSystem.map(function(item) {
 return String.fromCharCode(item);
 });

 str = arrSymbol.join("");

console.log(str);

 return str;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
