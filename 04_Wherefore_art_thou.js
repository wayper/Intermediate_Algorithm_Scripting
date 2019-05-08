function whatIsInAName(collection, source) {
 // What's in a name?
 var arr = [];
 // Only change code below this line

 for (let i = 0; i < collection.length; i++) {

     let arrIntermediate = [];

   for (var key1 in source) {
         if (key1 in collection[i]) {
           if (collection[i][key1] == source[key1]) {
             arrIntermediate.push(true);
           } else {
             arrIntermediate.push(false);
           }
         } else {
             arrIntermediate.push(false);
         }
   }
  
   if (arrIntermediate.every(function (value) {
     return value == true;
   })) {
     arr.push(collection[i]);
   }

 }

 // Only change code above this line
 return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
