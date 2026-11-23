/**
 * An LMS stores assignment submission data at following array.
 * Business Rules
 * - Passing score = 75
 * - Students who do not submit receive 0
 * - Submitted assignments below 75 require revision.
 * 
 * The principal requests a report showing:
 * - Total students
 * - Submitted assignments
 * - Missing assignments
 * - Passed students
 * - Students requiring revision
 * - Average score
 * - Highest score
 * - Lowest score
 * 
 * Student Tasks
 * 1. Design your own functions.
 * At minimum, your solution must contain:
 * - 7 non-void functions
 * - 1 void function to display the report.
 * 
 */

interface Submission {
  name: string;
  isSubmitted: boolean;
  score: number;
}

const submissions: Submission[] = [
  { name: "Alya", isSubmitted: true, score: 88 },
  { name: "Budi", isSubmitted: true, score: 70 },
  { name: "Citra", isSubmitted: false, score: 0 },
  { name: "Dimas", isSubmitted: true, score: 95 },
  { name: "Eka", isSubmitted: true, score: 65 },
  { name: "Fajar", isSubmitted: false, score: 0 }
];

function countTotalStudents(list: Submission[]): number {
  return list.length;
}

function countSubmitted(list: Submission[]): number {
  let count = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i].isSubmitted) {
      count++;
    }
  }
  return count;
}

function countMissing(list: Submission[]): number {
  let count = 0;
  for (let i = 0; i < list.length; i++) {
    if (!list[i].isSubmitted) {
      count++;
    }
  }
  return count;
}

function countPassed(list: Submission[]): number {
  let count = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i].isSubmitted && list[i].score >= 75) {
      count++;
    }
  }
  return count;
}

function countRevision(list: Submission[]): number {
  let count = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i].isSubmitted && list[i].score < 75) {
      count++;
    }
  }
  return count;
}

function calculateAverageScore(list: Submission[]): number {
  if (list.length === 0) return 0;
  let total = 0;
  for (let i = 0; i < list.length; i++) {
    total += list[i].isSubmitted ? list[i].score : 0;
  }
  return total / list.length;
}

function findHighestScore(list: Submission[]): number {
  if (list.length === 0) return 0;
  let highest = list[0].isSubmitted ? list[0].score : 0;
  for (let i = 1; i < list.length; i++) {
    const currentScore = list[i].isSubmitted ? list[i].score : 0;
    if (currentScore > highest) {
      highest = currentScore;
    }
  }
  return highest;
}

function findLowestScore(list: Submission[]): number {
  if (list.length === 0) return 0;
  let lowest = list[0].isSubmitted ? list[0].score : 0;
  for (let i = 1; i < list.length; i++) {
    const currentScore = list[i].isSubmitted ? list[i].score : 0;
    if (currentScore < lowest) {
      lowest = currentScore;
    }
  }
  return lowest;
}

function displayAssignmentReport(list: Submission[]): void {
  console.log("Total students: " + countTotalStudents(list));
  console.log("Submitted assignments: " + countSubmitted(list));
  console.log("Missing assignments: " + countMissing(list));
  console.log("Passed students: " + countPassed(list));
  console.log("Students requiring revision: " + countRevision(list));
  console.log("Average score: " + calculateAverageScore(list));
  console.log("Highest score: " + findHighestScore(list));
  console.log("Lowest score: " + findLowestScore(list));
}

displayAssignmentReport(submissions);