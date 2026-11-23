/**
 * An LMS stores assignment submission information on array below.
 * Business Rules
 * - Students who do not submit automatically receive a score of 0.
 * - A passing score is 75.
 * - Submitted assignments with a score below 75 require revision.
 * 
 * Student Tasks using a loop for:
 * - Count students who submitted their assignment.
 * - Count students who did not submit.
 * - Count students who passed.
 * - Count students who must revise their assignment.
 * - Display the names of students who did not submit.
 * - Display the names of students who must revise.
 * - Calculate the class average score.
 */

const submissions: { name: string; isSubmitted: boolean; score: number }[] = [];

let submittedCount = 0;
let notSubmittedCount = 0;
let passedCount = 0;
let revisionCount = 0;
let totalScore = 0;

const notSubmittedNames: string[] = [];
const revisionNames: string[] = [];

for (let i = 0; i < submissions.length; i++) {
  const student = submissions[i];

  if (!student.isSubmitted) {
    notSubmittedCount++;
    notSubmittedNames.push(student.name);
    totalScore += 0;
  } else {
    submittedCount++;
    totalScore += student.score;

    if (student.score >= 75) {
      passedCount++;
    } else {
      revisionCount++;
      revisionNames.push(student.name);
    }
  }
}

const averageScore = submissions.length > 0 ? totalScore / submissions.length : 0;

console.log("Students who submitted: " + submittedCount);
console.log("Students who did not submit: " + notSubmittedCount);
console.log("Students who passed: " + passedCount);
console.log("Students who must revise: " + revisionCount);
console.log("Did not submit: " + notSubmittedNames.join(", "));
console.log("Must revise: " + revisionNames.join(", "));
console.log("Class average score: " + averageScore);