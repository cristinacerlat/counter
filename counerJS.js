let count = 0;

const countDisplay = document.getElementById("count");
const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");
const resetButton = document.getElementById("reset");

increaseButton.addEventListener("click", () => {
    count++;
    updateCount();
});

decreaseButton.addEventListener("click", () => {
    count--;
    updateCount();
});

resetButton.addEventListener("click", () => {
    count = 0;
    updateCount();
});

function updateCount() {
    countDisplay.textContent = count;
}
