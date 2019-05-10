function myReplace(str, before, after) {


 if (/[A-Z]/.test(before.charAt(0))) {
       after = after.charAt(0).toUpperCase() + after.slice(1);
       str = str.replace(before, after);
   } else {
       str = str.replace(before, after);
   }

console.log(str);

 return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
