function smallestCommons(arr) {

 // Вывесть диапазон все чисел от и до по указанным параметрам
 let arrX = [];
   if (arr[0] < arr[1]) {
     let itemX = arr[0];
     for (let i = 0; i <= (arr[1] - arr[0]); i ++) {
         arrX.push(itemX);
         itemX += 1;
     }
   } else if (arr[0] > arr[1]) {
     let itemX = arr[1];
     for (let i = 0; i <= (arr[0] - arr[1]); i ++) {
         arrX.push(itemX);
         itemX += 1;
     }
   }
 let arrZ = [];
 // Для каждого вывести делители (два, или три, или пять, или само на себя)
 for (let j = arrX.length - 1; j >= 0; j--) {
     let arrY = [];
     let itemY = arrX[j];
     while (itemY != 1) {
       if (((itemY / 2) ^ 0) === (itemY / 2)) {
         arrY.push(2);
         itemY /= 2;
       } else if (((itemY / 3) ^ 0) === (itemY / 3)) {
         arrY.push(3);
         itemY /= 3;
       } else {
         arrY.push(itemY);
         itemY /= itemY;
       }
     }
     arrZ.push(arrY);     
 }
   let arrTotal = [];
// Добавляем все делители большего числа из заданного диапазона
   for (let i = 0; i < arrZ[0].length; i++) {
     arrTotal.push(arrZ[0][i]);
   }
// Добавляем остальные делители других чисел диапазона, если их нет среди перечня делителей большего числа
   for (let i = 1; i < arrZ.length; i++) {

       let arrTotalGap = arrTotal.slice();
       let arrZGap = arrZ[i].slice();
                
             for (let k = 0; k < arrZGap.length; k++) {
                 if (arrTotalGap.indexOf(arrZGap[k]) >= 0) {
                   arrTotalGap.splice(arrTotalGap.indexOf(arrZGap[k]), 1);
                 } else {
                   arrTotal.push(arrZGap[k]);
                 }
             }     
   }
// Перемножаем все найденные делители
   function multiplication (total, item) {
         return total * item;}
   let result = arrTotal.reduce(multiplication);

console.log(result);

 return result;
}

smallestCommons([18,23]);

