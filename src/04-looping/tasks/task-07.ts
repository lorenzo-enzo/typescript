/**
 * The homeroom teacher receives attendance data for one class at following array.
 * 
 * Using a loop:
 * - Count present students.
 * - Count absent students.
 * - Display the names of absent students.
 * - Calculate the attendance percentage.
 */

const attendanceData: { name: string; isPresent: boolean }[] = [];

let presentCount = 0;
let absentCount = 0;
const absentStudents: string[] = [];

for (let i = 0; i < attendanceData.length; i++) {
  if (attendanceData[i].isPresent) {
    presentCount++;
  } else {
    absentCount++;
    absentStudents.push(attendanceData[i].name);
  }
}

const attendancePercentage = attendanceData.length > 0 ? (presentCount / attendanceData.length) * 100 : 0;

console.log("Present students: " + presentCount);
console.log("Absent students: " + absentCount);
console.log("Names of absent students: " + absentStudents.join(", "));
console.log("Attendance percentage: " + attendancePercentage + "%");