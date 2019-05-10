function translatePigLatin(str) {

 if (/[^aeiou]+/.test(str.charAt(0))) {

    let vowels = str.match(/[^aeiou]+/);
    let strVowels = vowels.join("");

 str = str.slice(strVowels.length) + strVowels + "ay";

 } else {
   str = str + "way";
 }

 return str;
}

translatePigLatin("algorithm");

translatePigLatin("california");
