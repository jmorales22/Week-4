//exercise 1
/*Write a function printNumbers which is given a start number and 
an end number. It will print the numbers from one to the other, one 
per line*/

function printNumbers(start, end){
    while (start <= end) {
      console.log(start);
      start++;
    }
  }
  printNumbers(1, 10)

//exercise 2
/*Write a function printSquare which is given a size and prints a 
square of that size using asterisks.*/
let i = 0;

function printSquare(start){
  while (i < start){
  console.log('*'.repeat(start));
  i++;
  }
}
printSquare(10)
//another try - doesn't work
// let i = 0;
// let j = '*'

// function printSquare(start){
//   while (i < start){
//     while (j < start) {
//       console.log(j + '*');
//         j++;
//      i++;
//       }
//   }
// }
// printSquare(10)