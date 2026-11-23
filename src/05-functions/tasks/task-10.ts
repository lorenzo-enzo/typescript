/**
 * An online learning platform stores course completion information.
 * The academy director wants a dashboard containing:
 * Completion Statistics:
 * - Total enrollments
 * - Completed enrollments
 * - Incomplete enrollments
 * - Completion percentage
 * 
 * Academic Statistics:
 * - Highest score
 * - Lowest score
 * - Average score
 * - Students with passing scores (≥ 75)
 * 
 * Course Statistics:
 * - Number of students enrolled in each course
 * - Average score for each course
 * 
 * Learning Statistics:
 * - Total learning hours
 * - Average learning duration
 * 
 * Student Tasks:
 * You must design your own program architecture.
 * Requirements
 * Your solution must contain:
 * - At least 10 non-void functions
 * - At least 2 void functions
 * - No duplicated calculations
 * - Each function must have one responsibility
 * - Every printed value must come from another function
 * - Use meaningful function names and parameters
 * Reuse existing functions whenever possible
 */

interface Enrollment {
  studentName: string;
  course: string;
  isCompleted: boolean;
  score: number;
  learningHours: number;
}

const enrollments: Enrollment[] = [
  { studentName: "Alya", course: "TypeScript Basics", isCompleted: true, score: 88, learningHours: 12 },
  { studentName: "Budi", course: "Web Development", isCompleted: false, score: 65, learningHours: 7 },
  { studentName: "Citra", course: "Data Structures", isCompleted: true, score: 94, learningHours: 18 },
  { studentName: "Dimas", course: "TypeScript Basics", isCompleted: true, score: 79, learningHours: 10 },
  { studentName: "Eka", course: "Web Development", isCompleted: true, score: 85, learningHours: 15 },
  { studentName: "Fajar", course: "Data Structures", isCompleted: false, score: 70, learningHours: 9 }
];

function countTotalEnrollments(list: Enrollment[]): number {
  return list.length;
}

function countCompletedEnrollments(list: Enrollment[]): number {
  let count = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i].isCompleted) {
      count++;
    }
  }
  return count;
}

function countIncompleteEnrollments(list: Enrollment[]): number {
  return countTotalEnrollments(list) - countCompletedEnrollments(list);
}

function calculateCompletionPercentage(list: Enrollment[]): number {
  const total = countTotalEnrollments(list);
  if (total === 0) return 0;
  return (countCompletedEnrollments(list) / total) * 100;
}

function findHighestScore(list: Enrollment[]): number {
  if (list.length === 0) return 0;
  let highest = list[0].score;
  for (let i = 1; i < list.length; i++) {
    if (list[i].score > highest) {
      highest = list[i].score;
    }
  }
  return highest;
}

function findLowestScore(list: Enrollment[]): number {
  if (list.length === 0) return 0;
  let lowest = list[0].score;
  for (let i = 1; i < list.length; i++) {
    if (list[i].score < lowest) {
      lowest = list[i].score;
    }
  }
  return lowest;
}

function calculateTotalScore(list: Enrollment[]): number {
  let total = 0;
  for (let i = 0; i < list.length; i++) {
    total += list[i].score;
  }
  return total;
}

function calculateAverageScore(list: Enrollment[]): number {
  const total = countTotalEnrollments(list);
  if (total === 0) return 0;
  return calculateTotalScore(list) / total;
}

function countPassingStudents(list: Enrollment[]): number {
  let count = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i].score >= 75) {
      count++;
    }
  }
  return count;
}

function filterEnrollmentsByCourse(list: Enrollment[], courseName: string): Enrollment[] {
  const filtered: Enrollment[] = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i].course === courseName) {
      filtered.push(list[i]);
    }
  }
  return filtered;
}

function countStudentsByCourse(list: Enrollment[], courseName: string): number {
  return countTotalEnrollments(filterEnrollmentsByCourse(list, courseName));
}

function calculateAverageScoreByCourse(list: Enrollment[], courseName: string): number {
  return calculateAverageScore(filterEnrollmentsByCourse(list, courseName));
}

function calculateTotalLearningHours(list: Enrollment[]): number {
  let total = 0;
  for (let i = 0; i < list.length; i++) {
    total += list[i].learningHours;
  }
  return total;
}

function calculateAverageLearningDuration(list: Enrollment[]): number {
  const total = countTotalEnrollments(list);
  if (total === 0) return 0;
  return calculateTotalLearningHours(list) / total;
}

function printCompletionStatistics(list: Enrollment[]): void {
  console.log("=== Completion Statistics ===");
  console.log("Total enrollments: " + countTotalEnrollments(list));
  console.log("Completed enrollments: " + countCompletedEnrollments(list));
  console.log("Incomplete enrollments: " + countIncompleteEnrollments(list));
  console.log("Completion percentage: " + calculateCompletionPercentage(list) + "%");
}

function printAcademicStatistics(list: Enrollment[]): void {
  console.log("=== Academic Statistics ===");
  console.log("Highest score: " + findHighestScore(list));
  console.log("Lowest score: " + findLowestScore(list));
  console.log("Average score: " + calculateAverageScore(list));
  console.log("Students with passing scores (>= 75): " + countPassingStudents(list));
}

function printCourseStatistics(list: Enrollment[], courses: string[]): void {
  console.log("=== Course Statistics ===");
  for (let i = 0; i < courses.length; i++) {
    const course = courses[i];
    console.log(course + " - Enrolled: " + countStudentsByCourse(list, course) + ", Average Score: " + calculateAverageScoreByCourse(list, course));
  }
}

function printLearningStatistics(list: Enrollment[]): void {
  console.log("=== Learning Statistics ===");
  console.log("Total learning hours: " + calculateTotalLearningHours(list));
  console.log("Average learning duration: " + calculateAverageLearningDuration(list) + " hours");
}

function printAcademyDashboard(list: Enrollment[], courses: string[]): void {
  printCompletionStatistics(list);
  printAcademicStatistics(list);
  printCourseStatistics(list, courses);
  printLearningStatistics(list);
}

const availableCourses: string[] = ["TypeScript Basics", "Web Development", "Data Structures"];
printAcademyDashboard(enrollments, availableCourses);