const worker = new Worker('worker.js');

labelStatus = document.getElementById("lbl-status");
btnCalculate = document.getElementById("btn-calculate");
btnChangeBackgorundColor = document.getElementById("btn-change-background-color");

btnCalculate.addEventListener('click', function (e) {
    const limit = 100_000_000
    labelStatus.innerText = `Sum from 0 to ${limit}...`;
    worker.postMessage(limit);
});

// Get the result from the worker
worker.onmessage = function (message) {
    labelStatus.innerText = `Result: ${message?.data}`;
    setTimeout(() => {
        labelStatus.innerText = "";
    }, 10000);
}

// Generates random colors in main thread
const randomColor = function () {
    return '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
}
// Sets an initial random color
document.body.style.backgroundColor = randomColor();

btnChangeBackgorundColor.addEventListener('click', function (_) {
     document.body.style.backgroundColor = randomColor();
});
