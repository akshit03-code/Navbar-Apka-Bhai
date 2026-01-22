let count = 0;

const countDisplay = document.getElementById("count");
const increaseBtn = document.getElementById("Increase");
const resetBtn = document.getElementById("Reset");
const decreaseBtn = document.getElementById("Decrease");


//increase
increaseBtn.addEventListener("click", () => {
    count++;
    countDisplay.innerText = count;
});

//decrease
decreaseBtn.addEventListener("click", () => {
    if (count > 0) {
    count--;
    countDisplay.innerText = count;
    }
});

// reset

resetBtn.addEventListener("click", () => {
    count = 0;
    countDisplay.innerText = count;
})

