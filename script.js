const boxes = document.querySelectorAll(".box");
const startButton = document.getElementById("startButton");

let intervalId;
let chosenBox;
const colors = [
  "#D73B3E",
  "#0F52BA",
  "#D7D3D3",
  "#50C878",
  "#353839",
  "#E0115F",
  "#E4D00A",
  "#318C9B",
  "#FFC87C",
  "#40E0D0",
  "#E2703A",
  "#9966CC",
];

function highlightBoxes() {
  let currentIndex = 0;
  let previousIndex = boxes.length - 1; // Initialize previousIndex to the last box
  intervalId = setInterval(() => {
    // Return previous box to white color
    boxes[previousIndex].style.backgroundColor = "#f0f0f0";
    // Highlight current box
    boxes[currentIndex].style.backgroundColor = colors[currentIndex];
    // Update previousIndex to current index
    previousIndex = currentIndex;
    // Calculate the next index in the circular pattern
    currentIndex = (currentIndex + 1) % boxes.length;
  }, 100); // Adjust interval time as needed
}

function stopHighlighting() {
  clearInterval(intervalId);
  chosenBox = Math.floor(Math.random() * boxes.length);
  const chosenColor = colors[chosenBox];
  boxes.forEach((box, index) => {
    if (index !== chosenBox) {
      box.style.backgroundColor = "#f0f0f0"; // Set default color
    }
  });
  boxes[chosenBox].style.backgroundColor = chosenColor; // Highlight the chosen box with its color
  alert(`Box ${chosenBox + 1} is chosen!`);
}

startButton.addEventListener("click", () => {
  highlightBoxes();
  setTimeout(stopHighlighting, 5000); // Stop after 10 seconds
});
