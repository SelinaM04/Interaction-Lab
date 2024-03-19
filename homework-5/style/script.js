const containerEl = document.querySelector("#blocks_container");
const createBlocksBtn = document.querySelector("#create_blocks_btn");
const removeBlocksBtn = document.querySelector("#remove_blocks_btn");

function generateRandomScale() {
  return Math.random() * (1.0 - 0.5) + 0.5;
}

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
  containerEl.innerHTML = "";

  for (let i = 0; i < 8; i++) {
    const scale = generateRandomScale();
    const foregroundColor = foregroundColors[i % foregroundColors.length]; 
    const backgroundColor = backgroundColors[i % backgroundColors.length]; 

    const blockTemplate = `
      <div class="block" style="transform: scale(${scale}); color: ${foregroundColor}; background-color: ${backgroundColor};">
        Block ${i + 1}
      </div>
    `;

    containerEl.insertAdjacentHTML("beforeend", blockTemplate);
  }
}

function removeBlocks() {
  containerEl.innerHTML = "";
}

createBlocksBtn.addEventListener("click", createBlocks);
removeBlocksBtn.addEventListener("click", removeBlocks);
