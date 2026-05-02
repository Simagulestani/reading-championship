// 1


// Create competitors using an array of objects
const competitors = [
  {
    name: "Amina",
    books: ["Atomic Habits", "Deep Work", "Mindset"],
    totalPages: [300, 280, 250],
    pagesRead: [300, 200, 150]
  },
  {
    name: "Omar",
    books: ["Clean Code", "The Alchemist", "Rich Dad Poor Dad"],
    totalPages: [350, 200, 220],
    pagesRead: [350, 200, 220]
  },
  {
    name: "Sara",
    books: ["Thinking Fast and Slow", "Start With Why", "Ikigai"],
    totalPages: [400, 220, 180],
    pagesRead: [300, 150, 120]
  },
  {
    name: "Ali",
    books: ["Zero to One", "The Lean Startup", "Hooked"],
    totalPages: [250, 300, 200],
    pagesRead: [200, 250, 100]
  }
];


console.log("📚 Welcome to the Reading Championship!\n");

for (let i = 0; i < competitors.length; i++) {
  console.log(`👤 Competitor: ${competitors[i].name}`);
  console.log(`   Books: ${competitors[i].books.join(", ")}`);
  console.log("------------------------------------------------");
}
// 2


function calculateProgress(pagesRead, totalPages) {
  return (pagesRead / totalPages) * 100;
}

function calculateTotalPagesRead(pagesReadArray) {
  let total = 0;

  for (let i = 0; i < pagesReadArray.length; i++) {
    total += pagesReadArray[i];
  }

  return total;
}

function calculateCompletionRate(pagesReadArray, totalPagesArray) {
  let totalPercentage = 0;

  for (let i = 0; i < pagesReadArray.length; i++) {
    let progress = calculateProgress(pagesReadArray[i], totalPagesArray[i]);
    totalPercentage += progress;
  }

  return totalPercentage / pagesReadArray.length;
}
// Award points (score)
function awardPoints(totalPages, completionRate) {
  return totalPages + (completionRate * 2);
}

 // 3

let scores = []; // to store all scores

console.log("\n📊 Competition Results:\n");

for (let i = 0; i < competitors.length; i++) {

  let c = competitors[i];

  // Calculations
  let totalRead = calculateTotalPagesRead(c.pagesRead);
  let avgCompletion = calculateCompletionRate(c.pagesRead, c.totalPages);
  let score = awardPoints(totalRead, avgCompletion);

  // Store score
  scores.push(score);

  // Optional Titles
  let title = "";

  if (totalRead >= 400) {
    title = "🌟 Reading Star";
  } else if (totalRead >= 250) {
    title = "📖 Dedicated Reader";
  } else {
    title = "📘 Rising Reader";
  }

  // Print summary
  console.log(
    `${c.name}, ${totalRead} pages read, ` +
    `${avgCompletion.toFixed(2)}% average completion, ` +
    `Final Score: ${score.toFixed(2)} | ${title}`
  );
}

// 4

let maxScore = scores[0];
let winnerIndex = 0;

// Loop to find highest score
for (let i = 1; i < scores.length; i++) {
  if (scores[i] > maxScore) {
    maxScore = scores[i];
    winnerIndex = i;
  }
}

// Print Winner
console.log("\n🏆 Champion of the Reading Championship:");
console.log(
  `${competitors[winnerIndex].name} with ${maxScore.toFixed(2)} points! 🎉`
);