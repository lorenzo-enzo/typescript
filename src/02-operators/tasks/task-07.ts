/**
 * A hotel calculates a guest's payment based on the following information.
 * | Information          | Value  |
 * | -------------------- | ------ |
 * | Room Price per Night | 650000 |
 * | Nights Stayed        | 4      |
 * | Service Charge       | 120000 |
 * | Tax                  | 11%    |
 * | VIP Member           | Yes    |
 * 
 * Business Rules
 * - VIP guests receive a 12% room discount.
 * - Tax is calculated after the discount.
 * - Service charge is not discounted.
 * - The hotel also offers free breakfast if the guest stays at least 3 nights or is a VIP member.
 * 
 * The system must calculate:
 * - Room subtotal
 * - Discount
 * - Tax
 * - Final payment
 * - Whether the guest is eligible for free breakfast
 */

const roomPricePerNight: number = 650000;
const nightsStayed: number = 4;
const serviceCharge: number = 120000;
const taxRate: number = 0.11;
const isVIPMember: boolean = true;

const roomSubtotal: number = roomPricePerNight * nightsStayed;
const discount: number = isVIPMember ? roomSubtotal * 0.12 : 0;
const discountedRoomSubtotal: number = roomSubtotal - discount;
const tax: number = discountedRoomSubtotal * taxRate;
const finalPayment: number = discountedRoomSubtotal + tax + serviceCharge;

const isEligibleForFreeBreakfast: boolean = nightsStayed >= 3 || isVIPMember;
console.log("Room Subtotal:", roomSubtotal);
console.log("Discount:", discount);
console.log("Tax:", tax);
console.log("Service Charge:", serviceCharge);
console.log("Final Payment:", finalPayment);
console.log("Is the guest eligible for free breakfast?", isEligibleForFreeBreakfast);
console.log('-----------------------------------');
console.log('Summary:');
console.log('Room Subtotal:', roomSubtotal);
console.log('Discount:', discount);
console.log('Tax:', tax);
console.log('Service Charge:', serviceCharge);
console.log('Final Payment:', finalPayment);
console.log('Eligible for Free Breakfast:', isEligibleForFreeBreakfast ? 'Yes' : 'No');
console.log('-----------------------------------');
console.log('Detailed Breakdown:');
if (isVIPMember) {
    console.log('VIP Member Discount Applied: 12%');
    console.log('Discount Amount:', discount);
    console.log('Discounted Room Subtotal:', discountedRoomSubtotal);
} else {
    console.log('No VIP Member Discount Applied');
}
console.log('Tax Rate:', taxRate * 100 + '%');
console.log('Tax Amount:', tax);
console.log('Service Charge:', serviceCharge);
console.log('Final Payment:', finalPayment);
console.log('Eligible for Free Breakfast:', isEligibleForFreeBreakfast ? 'Yes' : 'No');
console.log('-----------------------------------');
console.log('Thank you for staying with us! We hope you enjoy your stay and have a great breakfast if eligible.');
console.log('-----------------------------------');
console.log('End of Payment Summary');

