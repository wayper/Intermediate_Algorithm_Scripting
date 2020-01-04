function fearNotLetter(str) {

let alphabet = "abcdefghijklmnopqrstuvwxyz";

let alphabetRange = alphabet.slice(str.indexOf(str.charAt(0)), alphabet.indexOf(str.charAt(str.length-1)) + 1);

let strResult;

 if (alphabetRange == str) {
   strResult = undefined;
 } else {
     for (let i = 0; i < alphabetRange.length; i++) {
    
       if (str.indexOf(alphabetRange.charAt(i)) < 0) {
         strResult = alphabetRange.charAt(i);
       }
     }
   }

 return strResult;
}

fearNotLetter("abce");

