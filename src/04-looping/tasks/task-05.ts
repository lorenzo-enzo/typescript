/**
 * A programming competition stores participants' scores in the following array.
 * 
 * 
 * Competition Rules
 * Gold Medal : score ≥ 95
 * Silver Medal : score 85–94
 * Bronze Medal : score 75–84
 * No Medal : below 75
 * 
 * 
 * Student Tasks
 * Using a loop, calculate:
 * - Number of Gold Medal winners
 * - Number of Silver Medal winners
 * - Number of Bronze Medal winners
 * - Number of students without medals
 * - Average competition score
 */

const scores: number[] = [];

let goldCount = 0;
let silverCount = 0;
let bronzeCount = 0;
let noMedalCount = 0;
let totalScore = 0;

for (let i = 0; i < scores.length; i++) {
  totalScore += scores[i];

  if (scores[i] >= 95) {
    goldCount++;
  } else if (scores[i] >= 85) {
    silverCount++;
  } else if (scores[i] >= 75) {
    bronzeCount++;
  } else {
    noMedalCount++;
  }
}

const averageScore = scores.length > 0 ? totalScore / scores.length : 0;

console.log("Number of Gold Medal winners: " + goldCount);
console.log("Number of Silver Medal winners: " + silverCount);
console.log("Number of Bronze Medal winners: " + bronzeCount);
console.log("Number of students without medals: " + noMedalCount);
console.log("Average competition score: " + averageScore);