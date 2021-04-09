function clearOutPut() {
    $("#output").innerHTML = "0"
}

function removeZero() {
    let value = $("#output").innerHTML;
    if (value == "0") {
        value = " "
        $("#output").innerHTML = value;
    }
}

function perc() {
    removeZero()
    let value = $("#output").innerHTML;
    value = value / 100
    $("#output").innerHTML = value;
}

function fordisplay(myvalue) {
    removeZero()
    $("#output").innerHTML += myvalue
}

function solve() {
    removeZero()
    let equation = $("#output").innerHTML;
    let solved = eval(equation)
    $("#output").innerHTML = solved;
}

function $(e) {
    return document.querySelector(e)
}