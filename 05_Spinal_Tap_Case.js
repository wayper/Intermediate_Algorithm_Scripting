function spinalCase(str) {
 // "It's such a fine line between stupid, and clever."
 // --David St. Hubbins

 let arr = str.match(/[a-z]+|[A-Z][a-z]+/g);

 str = arr.join("-");


 return str.toLowerCase();
}

spinalCase('This Is Spinal Tap');
