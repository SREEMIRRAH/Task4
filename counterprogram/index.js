let count = 0;
document.getElementById("incBtn").onclick = function () {
    count++;
    document.getElementById("counterLabel").textContent =  `${count}`;
}
document.getElementById("decBtn").onclick = function () {
    count--;
    document.getElementById("counterLabel").textContent =  `${count}`;
}
document.getElementById("resetBtn").onclick = function () {
    count=0;
    document.getElementById("counterLabel").textContent =  `${count}`;
}