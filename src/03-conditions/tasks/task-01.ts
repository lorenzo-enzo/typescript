/**
 * SMK Telkom Malang is preparing the graduation list for Grade 12 students. A student is eligible to graduate only if all of the following requirements are satisfied:

 * - Final score is at least 75
 * - Attendance is at least 90%
 * - All tuition fees have been paid
 * 
 * The administration received the following student information.
 * | Information  | Value      |
 * | ------------ | ---------- |
 * | Student Name | Alya Putri |
 * | Final Score  | 82         |
 * | Attendance   | 94         |
 * | Tuition Paid | Yes        |
 * 
 * Tasks:
 * 1. Declare all required variables.
 * 2. Implement the decision using an if statement.
 * 3. Display the appropriate message. if student meets all requirement, 
 * will be display "Congratulations! You are eligible to graduate.", 
 * otherwise display "You are not eligible to graduate."
 */

const studentname: string = "Alya Putri";
const finalscore: number = 82;
const attendance: number = 94;
const tuitionpaid: boolean = true;

if (finalscore >= 75 && attendance >= 90 && tuitionpaid) {
    console.log("Congratulations! You're eligible to graduate.");
} 

else {
    console.log("You aren't eligible to graduate.");
}
console.log('Student name:', studentname);
console.log('Final score:', finalscore);
console.log('Attendance:', attendance);
console.log('Tuition paid:', tuitionpaid);
console.log('Eligibility:', finalscore >= 75 && attendance >= 90 && tuitionpaid ? 'Eligible' : 'Not Eligible');
console.log('-----------------------------------');
console.log('Summary:');
if (finalscore >= 75 && attendance >= 90 && tuitionpaid) {
    console.log('Congratulations! You are eligible to graduate');
}
else {
    console.log('You are not eligible to graduate');
    console.log('Requirements not met:');
    if (finalscore < 75) {
        console.log('-Final score is below 75');
    }
    if (attendance < 90) {
        console.log('-Attendance is below 90%');
    }
    if (!tuitionpaid) {
        console.log('-Tuition fees have not been paid');
    }
}
