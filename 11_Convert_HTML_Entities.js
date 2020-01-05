function convertHTML(str) {
  // &colon;&rpar;

   str = str.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&​gt;")
            .replace(/"/g, "&​quot;")
            .replace(/'/g, "&​apos;");

  console.log(str);

  return str;
}

convertHTML("Dolce & Gabbana");
convertHTML("Hamburgers < Pizza < Tacos");
convertHTML("Sixty > twelve");
convertHTML('Stuff in "quotation marks"');
convertHTML("Schindler's List");
