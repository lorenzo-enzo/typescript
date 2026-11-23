/**
 * A university stores the final grades of students enrolled in the Backend Development course at array below.
 * Grade Categories
 * - A : 90–100
 * - B : 80–89
 * - C : 70–79
 * - D : below 70
 * 
 * Student Task Calculate:
 * - Number of A students
 * - Number of B students
 * - Number of C students
 * - Number of D students
 * - Highest score
 * - Lowest score
 * - Average score
 */

const grades: number[] = [];

let countA = 0;
let countB = 0;
let countC = 0;
let countD = 0;
let highestScore = grades.length > 0 ? grades[0] : 0;
let lowestScore = grades.length > 0 ? grades[0] : 0;
let totalScore = 0;

for (let i = 0; i < grades.length; i++) {
  const score = grades[i];
  totalScore += score;

  if (score > highestScore) {
    highestScore = score;
  }

  if (score < lowestScore) {
    lowestScore = score;
  }

  if (score >= 90) {
    countA++;
  } else if (score >= 80) {
    countB++;
  } else if (score >= 70) {
    countC++;
  } else {
    countD++;
  }
}

const averageScore = grades.length > 0 ? totalScore / grades.length : 0;

console.log("Number of A students: " + countA);
console.log("Number of B students: " + countB);
console.log("Number of C students: " + countC);
console.log("Number of D students: " + countD);
console.log("Highest score: " + highestScore);
console.log("Lowest score: " + lowestScore);
console.log("Average score: " + averageScore);