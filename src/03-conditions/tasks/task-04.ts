/**
 * A hotel determines room availability using the following rules.
 * First, the system checks whether rooms are still available.
 * If rooms are available:
 * - Premium members receive a free room upgrade.
 * - Regular customers receive the reserved room only.
 * 
 * If no rooms are available:
 * - Premium members are placed on the priority waiting list.
 * - Regular customers are informed that no rooms are available.
 * 
 * Today's reservation:
 * | Information    | Value       |
 * | -------------- | ----------- |
 * | Customer Name  | Nadia Putri |
 * | Premium Member | Yes         |
 * | Room Available | No          |
 * 
 * The system should display the appropriate message.
 * Student Tasks: 
 * 1. Declare all variables.
 * 2. Implement the logic using nested if statements.
 * 3. Display the reservation result.
 */

// 1. Deklarasi semua variabel berdasarkan data hari ini
const customerName = "Nadia Putri";
const isPremiumMember = true;
const isRoomAvailable = false;

// 2. Implementasi logika menggunakan nested if statements
if (isRoomAvailable) {
    // Jika kamar tersedia
    if (isPremiumMember) {
        console.log("Status: Kamar Tersedia");
        console.log(`Hasil: ${customerName} mendapatkan free room upgrade!`);
    } else {
        console.log("Status: Kamar Tersedia");
        console.log(`Hasil: ${customerName} mendapatkan kamar yang dipesan.`);
    }
} else {
    // Jika kamar TIDAK tersedia
    if (isPremiumMember) {
        console.log("Status: Kamar Penuh");
        console.log(`Hasil: ${customerName} dimasukkan ke dalam priority waiting list.`);
    } else {
        console.log("Status: Kamar Penuh");
        console.log(`Hasil: Mohon maaf ${customerName}, tidak ada kamar yang tersedia saat ini.`);
    }
}

