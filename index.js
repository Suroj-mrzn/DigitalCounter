const decreasebtn = document.getElementById('decrease-btn');
const resetbtn = document.getElementById('reset-btn');
const increasebtn = document.getElementById('increase-btn');
const counter = document.getElementById('counter');

let count = 0;
 
increasebtn.onclick = function() {
    count++;
    counter.textContent = count;
}
decreasebtn.onclick = function() {
    count--;
    counter.textContent = count;
}
resetbtn.onclick = function() {
    count = 0;
    counter.textContent = count;
}