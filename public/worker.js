// Receives a number in the data attribute of the message
self.onmessage = function (message) {
    let sum = 0;
    for (let i = 0; i < message?.data; i++) {
        sum += i;
    }
    self.postMessage(sum)
};