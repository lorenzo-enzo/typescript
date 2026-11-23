/**
 * An online store stores product prices in an array in below.
 * The finance department needs to calculate the total purchase amount.
 * Instead of calculating the total directly in the main program, create reusable function.
 * The function should return the total price.
 * Student Tasks
 * 1. Create a function named calculateTotalPrice.
 * 2. The function receives an array of prices.
 * 3. Use a loop to calculate the total.
 * 4. Return the total price.
 * 5. Display the returned value.
 */

function calculateTotalPrice(prices: number[]): number {
  let total = 0;

  for (let i = 0; i < prices.length; i++) {
    total += prices[i];
  }

  return total;
}

const productPrices: number[] = [150000, 75000, 320000, 95000];
const totalPurchase = calculateTotalPrice(productPrices);

console.log("Total purchase amount: Rp" + totalPurchase);