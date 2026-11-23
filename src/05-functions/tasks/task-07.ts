/**
 * A university stores enrollment information at following array
 * The university needs a report containing:
 * - Total students
 * - Active students
 * - Inactive students
 * - Software Engineering students
 * - Networking students
 * - Multimedia students
 * 
 * Complete following functions!
 */

interface Student {
  name: string;
  major: string;
  isActive: boolean;
}

const students: Student[] = [
  { name: "Alya", major: "Software Engineering", isActive: true },
  { name: "Budi", major: "Networking", isActive: false },
  { name: "Citra", major: "Multimedia", isActive: true },
  { name: "Dimas", major: "Software Engineering", isActive: true },
  { name: "Eka", major: "Networking", isActive: true },
  { name: "Fajar", major: "Multimedia", isActive: false }
];

function countTotalStudents(studentList: Student[]): number {
  return studentList.length;
}

function countActiveStudents(studentList: Student[]): number {
  let count = 0;
  for (let i = 0; i < studentList.length; i++) {
    if (studentList[i].isActive) {
      count++;
    }
  }
  return count;
}

function countInactiveStudents(studentList: Student[]): number {
  let count = 0;
  for (let i = 0; i < studentList.length; i++) {
    if (!studentList[i].isActive) {
      count++;
    }
  }
  return count;
}

function countStudentsByMajor(studentList: Student[], major: string): number {
  let count = 0;
  for (let i = 0; i < studentList.length; i++) {
    if (studentList[i].major === major) {
      count++;
    }
  }
  return count;
}

function displayEnrollmentReport(studentList: Student[]): void {
  console.log("Total students: " + countTotalStudents(studentList));
  console.log("Active students: " + countActiveStudents(studentList));
  console.log("Inactive students: " + countInactiveStudents(studentList));
  console.log("Software Engineering students: " + countStudentsByMajor(studentList, "Software Engineering"));
  console.log("Networking students: " + countStudentsByMajor(studentList, "Networking"));
  console.log("Multimedia students: " + countStudentsByMajor(studentList, "Multimedia"));
}

displayEnrollmentReport(students);