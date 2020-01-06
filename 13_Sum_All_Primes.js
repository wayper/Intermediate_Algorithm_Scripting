function sumPrimes(num) {

let total = 0;

for (let p = 2; p <= num; p++) {

       let folded = false;

   for (let divider = 2; divider < p; divider++) {

       let x = p / divider;

       if ((x ^ 0) === x) {
         folded = true;         
         continue;
       }
   }
         if (folded == false) {
           total += p;
     console.log("Простое " + p);
   }  


}    

  console.log(total);

return total;
}

sumPrimes(977);

