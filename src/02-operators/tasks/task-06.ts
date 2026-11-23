/**
 * An internet café charges customers Rp8,000 per hour. 
 * Customers are billed for every started hour. If the total playing time exceeds 5 hours, they receive a 15% discount.
 * Today, a customer used a computer for:
 * 7 hours and 35 minutes
 * 
 * 
 * You need to determine:
 * - Total playing time in minutes
 * - Remaining minutes after full hours
 * - Total billed hours
 * - Total payment before discount
 * - Discount amount
 * - Final payment
 */

const ratePerHour = 8000;
const hours = 7;
const minutes = 35;

const totalMinutes = (hours * 60) + minutes;
const remainingMinutes = totalMinutes % 60;
const billedHours = Math.floor(totalMinutes / 60) + (remainingMinutes > 0 ? 1 : 0);
const totalBeforeDiscount = billedHours * ratePerHour;
const discountAmount = billedHours > 5 ? totalBeforeDiscount * 0.15 : 0;
const finalPayment = totalBeforeDiscount - discountAmount;

console.log("Total playing time in minutes: " + totalMinutes);
console.log("Remaining minutes after full hours: " + remainingMinutes);
console.log("Total billed hours: " + billedHours);
console.log("Total payment before discount: Rp" + totalBeforeDiscount);
console.log("Discount amount: Rp" + discountAmount);
console.log("Final payment: Rp" + finalPayment);