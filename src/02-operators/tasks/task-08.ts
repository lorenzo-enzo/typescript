/**
 * A smart home monitors electricity usage every day.
 * Today's information:
 * | Information               | Value |
 * | ------------------------- | ----- |
 * | Previous Meter            | 25640 |
 * | Current Meter             | 25892 |
 * | Electricity Price per kWh | 1650  |
 * | Solar Panel Installed     | Yes   |
 * | Energy Saving Mode        | No    |
 * 
 * Business Rules
 * - Electricity usage is calculated from the meter difference.
 * - Houses with solar panels receive a 20% discount.
 * - Houses receive an additional 5% discount if Energy Saving Mode is enabled.
 * - A house qualifies for the Green Energy Program only if:
 *      - Solar panel is installed
 *      - Energy consumption is below 300 kWh
 *      - Energy Saving Mode is enabled
 * 
 * The system must calculate:
 * - Total energy consumption
 * - Electricity bill
 * - Final bill
 * - Green Energy Program eligibility
 */

// 1. Declare all variables based on today's information
const previousMeter: number = 25640;
const currentMeter: number = 25892;
const pricePerKwh: number = 1650;
const isSolarPanelInstalled: boolean = true; // Yes
const isEnergySavingModeEnabled: boolean = false; // No

// 2. Calculations
// - Total energy consumption
const totalEnergyConsumption: number = currentMeter - previousMeter;

// - Electricity bill (before discount)
const electricityBill: number = totalEnergyConsumption * pricePerKwh;

// 3. Apply discounts based on business rules
let discountPercentage: number = 0;

if (isSolarPanelInstalled) {
    discountPercentage += 0.20; // 20% discount
}

if (isEnergySavingModeEnabled) {
    discountPercentage += 0.05; // Additional 5% discount
}

// - Final bill after discount
const finalBill: number = electricityBill * (1 - discountPercentage);

// - Green Energy Program eligibility
let isEligibleForGreenProgram: boolean = false;

if (isSolarPanelInstalled && totalEnergyConsumption < 300 && isEnergySavingModeEnabled) {
    isEligibleForGreenProgram = true;
}

// 4. Display the results
console.log(`Total Energy Consumption : ${totalEnergyConsumption} kWh`);
console.log(`Base Electricity Bill    : Rp ${electricityBill}`);
console.log(`Applied Discount         : ${discountPercentage * 100}%`);
console.log(`Final Bill               : Rp ${finalBill}`);
console.log(`Green Energy Program     : ${isEligibleForGreenProgram ? "Eligible" : "Not Eligible"}`);
