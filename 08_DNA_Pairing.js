function pairElement(str) {
  let arr = [];
 for (let i = 0; i < str.length; i++) {
   let arrItem = [];
   arrItem.push(str.charAt(i));

    switch (str.charAt(i)) {
       case "A":
         arrItem.push("T");
         break;
       case "T":
         arrItem.push("A");
         break;
       case "C":
         arrItem.push("G");
         break;
       case "G":
         arrItem.push("C");
         break;
    }
    arr.push(arrItem);
}
 return arr;
}
pairElement("GCG");
