let p = document.getElementsByTagName("p")[0];
let x = 0;
function lower() {
    x--;
    p.innerText = x;
    p.style.color = "red";
}
function reset() {
    p.innerText = 0;
    x = 0;
    p.style.color = "black";
}
function add() {
    x++;
    p.innerText = x;
    p.style.color = "blue";
}
