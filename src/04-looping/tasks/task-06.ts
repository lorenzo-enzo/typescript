/**
 * A warehouse stores the stock quantity of each product in following array.
 * Warehouse Rules:
 * - Out of Stock → quantity = 0
 * - Low Stock → quantity < 10
 * - Safe Stock → quantity ≥ 10
 * 
 * Students have to Calculate:
 * - Number of Out of Stock products
 * - Number of Low Stock products
 * - Number of Safe Stock products
 * - Total inventory
 * - Average stock quantity
 */

const stocks: number[] = [];

let outOfStockCount = 0;
let lowStockCount = 0;
let safeStockCount = 0;
let totalInventory = 0;

for (let i = 0; i < stocks.length; i++) {
  totalInventory += stocks[i];

  if (stocks[i] === 0) {
    outOfStockCount++;
  } else if (stocks[i] < 10) {
    lowStockCount++;
  } else {
    safeStockCount++;
  }
}

const averageStock = stocks.length > 0 ? totalInventory / stocks.length : 0;

console.log("Number of Out of Stock products: " + outOfStockCount);
console.log("Number of Low Stock products: " + lowStockCount);
console.log("Number of Safe Stock products: " + safeStockCount);
console.log("Total inventory: " + totalInventory);
console.log("Average stock quantity: " + averageStock);