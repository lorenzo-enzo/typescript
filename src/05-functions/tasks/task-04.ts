/**
 * The homeroom teacher stores attendance information as follows.
 * The school wants to display an attendance report.
 * The report should include:
 * - Total Present
 * - Total Absent
 * - Names of absent students
 * The report is displayed directly on the console.
 * Student Tasks:
 * - Create a function named printAttendanceReport.
 * - The function receives the attendance array.
 * - Use looping and conditions.
 * - Display the report inside the function.
 * - The function should not return any value.
 */

interface StudentAttendance {
  name: string;
  isPresent: boolean;
}

function printAttendanceReport(attendanceList: StudentAttendance[]): void {
  let totalPresent = 0;
  let totalAbsent = 0;
  const absentStudents: string[] = [];

  for (let i = 0; i < attendanceList.length; i++) {
    if (attendanceList[i].isPresent) {
      totalPresent++;
    } else {
      totalAbsent++;
      absentStudents.push(attendanceList[i].name);
    }
  }

  console.log("Total Present: " + totalPresent);
  console.log("Total Absent: " + totalAbsent);
  console.log("Names of absent students: " + absentStudents.join(", "));
}

const attendanceData: StudentAttendance[] = [
  { name: "Alya", isPresent: true },
  { name: "Budi", isPresent: false },
  { name: "Citra", isPresent: true },
  { name: "Dimas", isPresent: false }
];

printAttendanceReport(attendanceData);