/*Our football team has finished the championship.

Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

For example: ["3:1", "2:2", "0:1", ...]

Points are awarded for each match as follows:

if x > y: 3 points (win)
if x < y: 0 points (loss)
if x = y: 1 point (tie)
We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

Notes:

our team always plays 10 matches in the championship
0 <= x <= 4
0 <= y <= 4*/

//My Solution
function points(games) {
  let totalPoints = 0;
  // set a place for the score to be stored

  for (let i = 0; i < games.length; i++) {
    // Split the string "x:y" into two numbers
    const score = games[i].split(":");
    const x = Number(score[0]);
    const y = Number(score[1]);

    // Apply the scoring rules
    if (x > y) {
      totalPoints += 3;
    } else if (x === y) {
      totalPoints += 1;
    }
    // No need to handle x < y, as adding 0 points changes nothing
  }

  return totalPoints;
}

//Different Solution

//Solution#1
function points(games) {
  let total = 0;
  games.map(game => {
    if (game[0] === game[2]) {
      total += 1;
    } else if (game[0] > game[2]) {
      total += 3;
    }
  });
  return total;
}

//Solution#2
const points = g => g.reduce((a, [x, _, y]) => a + (x > y ? 3 : x == y), 0)