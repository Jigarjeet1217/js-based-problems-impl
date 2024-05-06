// // count no of substrings of S with value greater than X
// let S = '471',
//   X = '47';

// for (let i = 0; i < S.length; i++) {
//   for (let j = 0; j < S.length; j++) {
//     let subString = `${S[i]}${S[j]}`;
//     console.log(subString);
//   }
// }

// function factorial(size) {
//   if (size === 0 || size === 1) return 1;
//   else return size * factorial(size - 1);
// }
// let res = factorial(4);
// console.log(res);

// implementing pascal triangle concept

// let size = 10;

// function pascalTriangle(size) {
//   //   let op = [];
//   for (let row = 0; row < size; row++) {
//     let res = [];
//     for (let col = 0; col <= row; col++) {
//       //   console.log(row, col);
//       let colVal = getPascalRowVal(row, col);
//       res.push(colVal);
//     }
//     console.log(res.join(' '));
//     // op.push(res);
//   }
//   //   console.log(op);
// }

// function getPascalRowVal(row, col) {
//   let a = fact(row),
//     b = fact(col),
//     c = fact(row - col);
//   return a / (b * c);
// }

// function fact(num) {
//   if (num === 0 || num === 1) return 1;
//   else return num * fact(num - 1);
// }

// pascalTriangle(size);

// pascal triangle impl using prev row val

// let size = 15;
// function pascalTriangle(size) {
//   let op = [];
//   for (let row = 0; row < size; row++) {
//     let res = [];
//     for (let col = 0; col <= row; col++) {
//       if (row === 0 || col === row) res.push(1); // if extremes ends-> value = 1
//       else {
//         //  the sum is prev row values - if col val = 2, sum of prev index pos 1 and prev index pos 2
//         let prev1 = op[row - 1][col - 1] || 0;
//         let prev2 = op[row - 1][col] || 0;
//         const sum = prev1 + prev2;
//         res.push(sum);
//       }
//     }
//     op.push(res);
//   }
//   return op;
// }

// console.log(pascalTriangle(size));
