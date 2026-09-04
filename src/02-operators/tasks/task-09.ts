/**
 * An online marketplace wants to calculate the customer's final payment and reward points after checkout.
 * The customer purchases the following items:
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Monitor Stand       | 420000 |        1 |
 * 
 * Customer Information:
 * | Information       | Value                            |
 * | ----------------- | -------------------------------- |
 * | Voucher Value     | 100000                           |
 * | Premium Member    | Yes                              |
 * | Reward Point Rate | 1 point for every Rp50,000 spent |
 * 
 * Business Rules:
 * - Premium members receive 10% discount.
 * - Voucher is deducted after the membership discount.
 * - Reward points are calculated from the final payment before tax.
 * - VAT is 11%.
 * - Free shipping is available if:
 * - Premium member OR
 * - Final payment before tax exceeds Rp1,500,000.
 * 
 * The checkout system must calculate:
 * - Product subtotal
 * - Membership discount
 * - Voucher deduction
 * - Payment before tax
 * - VAT
 * - Final payment
 * - Reward points
 * - Free shipping eligibility


 */

// 1. Data Produk dan Jumlah Pembelian
const keyboardPrice: number = 850000;
const keyboardQty: number = 1;

const mousePrice: number = 275000;
const mouseQty: number = 2;

const standPrice: number = 420000;
const standQty: number = 1;

// Informasi Pelanggan
const voucherValue: number = 100000;
const isPremiumMember: boolean = true; // Yes

// 2. Proses Perhitungan Aturan Bisnis
// - Perhitungan Subtotal Produk
const productSubtotal: number = (keyboardPrice * keyboardQty) + (mousePrice * mouseQty) + (standPrice * standQty);

// - Diskon Membership (10% jika Premium Member)
const membershipDiscount: number = isPremiumMember ? productSubtotal * 0.10 : 0;

// - Potongan Voucher (dihitung setelah diskon membership)
const paymentAfterDiscount: number = productSubtotal - membershipDiscount;
const voucherDeduction: number = voucherValue;

// - Pembayaran Sebelum Pajak (Payment before tax)
const paymentBeforeTax: number = paymentAfterDiscount - voucherDeduction;

// - Pajak Pertambahan Nilai / PPN (VAT 11%)
const vat: number = paymentBeforeTax * 0.11;

// - Total Pembayaran Akhir (Final payment)
const finalPayment: number = paymentBeforeTax + vat;

// - Perhitungan Poin Reward (1 poin setiap kelipatan kelipatan Rp50.000 dari sebelum pajak)
const rewardPoints: number = Math.floor(paymentBeforeTax / 50000);

// - Kelayakan Gratis Ongkir (Premium member ATAU belanja sebelum pajak > Rp1.500.000)
const isEligibleForFreeShipping: boolean = isPremiumMember || paymentBeforeTax > 1500000;

// 3. Menampilkan Hasil Evaluasi Sistem
console.log(`Product Subtotal        : Rp ${productSubtotal}`);
console.log(`Membership Discount     : Rp ${membershipDiscount}`);
console.log(`Voucher Deduction       : Rp ${voucherDeduction}`);
console.log(`Payment Before Tax      : Rp ${paymentBeforeTax}`);
console.log(`VAT (11%)               : Rp ${vat}`);
console.log(`-----------------------------------------`);
console.log(`Final Payment           : Rp ${finalPayment}`);
console.log(`Reward Points Earned    : ${rewardPoints} points`);
console.log(`Free Shipping Status    : ${isEligibleForFreeShipping ? "Eligible" : "Not Eligible"}`);
