/**
 * An online store wants to generate a daily sales dashboard. All transaction amounts are stored in an array.
 * Instead of writing one long program, the development team decides to split the calculations into reusable functions.
 * The dashboard should display:
 * - Total sales
 * - Highest transaction
 * - Lowest transaction
 * - Average transaction
 * - Number of transactions above Rp500,000
 * 
 * Student Tasks
 * Create the following functions:
 */

const transactions: number[] = [
  250000,
  620000,
  180000,
  950000,
  450000,
  780000,
  310000,
  540000
];

function calculateTotalSales(sales: number[]): number {
  let total = 0;
  for (let i = 0; i < sales.length; i++) {
    total += sales[i];
  }
  return total;
}

function findHighestTransaction(sales: number[]): number {
  let highest = sales[0];
  for (let i = 1; i < sales.length; i++) {
    if (sales[i] > highest) {
      highest = sales[i];
    }
  }
  return highest;
}

function findLowestTransaction(sales: number[]): number {
  let lowest = sales[0];
  for (let i = 1; i < sales.length; i++) {
    if (sales[i] < lowest) {
      lowest = sales[i];
    }
  }
  return lowest;
}

function calculateAverageTransaction(sales: number[]): number {
  return sales.length > 0 ? calculateTotalSales(sales) / sales.length : 0;
}

function countHighTransactions(sales: number[]): number {
  let count = 0;
  for (let i = 0; i < sales.length; i++) {
    if (sales[i] > 500000) {
      count++;
    }
  }
  return count;
}

function displaySalesDashboard(sales: number[]): void {
  console.log("Total sales: Rp" + calculateTotalSales(sales));
  console.log("Highest transaction: Rp" + findHighestTransaction(sales));
  console.log("Lowest transaction: Rp" + findLowestTransaction(sales));
  console.log("Average transaction: Rp" + calculateAverageTransaction(sales));
  console.log("Number of transactions above Rp500,000: " + countHighTransactions(sales));
}

displaySalesDashboard(transactions);