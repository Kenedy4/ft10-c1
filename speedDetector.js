function calculateDemeritPoints(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed <= speedLimit) {
    return 0;
  } else {
    return Math.floor((speed - speedLimit) / kmPerPoint);
  }
}

function main() {
  const speed = parseInt(150, 10);

  if (isNaN(speed)) {
    console.log("Invalid input. Please enter a number.");
    return;
  }

  const demeritPoints = calculateDemeritPoints(speed);

  if (demeritPoints === 0) {
    console.log("Ok");
  } else {
    console.log("Points:", demeritPoints);
    if (demeritPoints > 12) {
      console.log("License suspended");
    }
  }
}

// Run the main function
main();
