let starAmount: number = 5;
for (let d=5; d >=1; d--){
  console.log ("*".repeat(d));
  starAmount -= d;
}
console.log(`Star amount: ${starAmount}`);