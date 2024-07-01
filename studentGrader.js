const readline = require("readline");
function studentGrader(marks) {
  if (marks < 0 || marks > 100) {
    return "Enter marks between 0 and 100.";
  } else {
    let grade;
    if (marks > 79) {
      grade = "A";
    } else if (marks >= 60) {
      grade = "B";
    } else if (marks >= 50) {
      grade = "C";
    } else if (marks >= 40) {
      grade = "D";
    } else {
      grade = "E";
    }
  }
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter your marks: ", (input) => {
  const marks = parseFloat(input);
  if (isNaN(marks)) {
    console.log("Invalid input. grade should be between 0-100");
  } else {
    console.log(studentGrader(marks));
  }
  rl.close();
});
