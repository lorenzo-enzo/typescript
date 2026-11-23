/*let starAmountB: number = 0;
for (let d = 1; d <= 3; d++) {
  console.log("*".repeat(d));
  starAmountB += d;
}
for (let d = 2; d >= 1; d--) {
  console.log("*".repeat(d));
  starAmountB += d;
}
console.log(`Star amount: ${starAmountB}`);
*/

let starAmount: number = 0;
for (let d=1; d <=3; d++) {
  console.log ("*".repeat(d));
  starAmount += d;
}

  for (let d=2; d >=1; d--) {
    console.log ("*".repeat(d));
    starAmount += d;
}

console.log(`Star amount: ${starAmount}`);