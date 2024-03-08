const containerEl = document.querySelector("#blocks_container");
const createBlocksBtn = document.querySelector("#create_blocks_btn");
const removeBlocksBtn = document.querySelector("#remove_blocks_btn");

// Function to generate random numbers between 0.5 and 1.0
function generateRandomScale() {
  return Math.random() * (1.0 - 0.5) + 0.5;
}

// Arrays for foreground and background colors
const foregroundColors = [
  "white",
  "pink",
  "orange",
  "black",
  "purple"
];
const backgroundColors = [
  "yellow",
  "lightgreen",
  "darkblue",
  "gray",
  "white"
];

function createBlocks() {
  // Remove existing blocks
  containerEl.innerHTML = "";

  // Loop through each block
  for (let i = 0; i < 8; i++) {
    const scale = generateRandomScale();
    const foregroundColor = foregroundColors[i % foregroundColors.length]; // Cycle through foreground colors
    const backgroundColor = backgroundColors[i % backgroundColors.length]; // Cycle through background colors

    // Create block template string
    const blockTemplate = `
      <div class="block" style="transform: scale(${scale}); color: ${foregroundColor}; background-color: ${backgroundColor};">
        Block ${i + 1}
      </div>
    `;

    // Insert block template string to the container
    containerEl.insertAdjacentHTML("beforeend", blockTemplate);
  }
}

function removeBlocks() {
  // Remove existing blocks
  containerEl.innerHTML = "";
}

// Event listeners
createBlocksBtn.addEventListener("click", createBlocks);
removeBlocksBtn.addEventListener("click", removeBlocks);
