function btnv(h) {
    text(h)
    if (h == "c") {
        document.getElementById("text").innerText = "";
    }
}
function text(h) {
    e = document.getElementById("text").innerText += h;
}
function ans() {
    document.getElementById("text").innerText = eval(e);
}

