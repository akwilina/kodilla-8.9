function drawChars(length, char) {
    var element = "";
    for (var i = 1; i <= length; i++) {
        element = element.concat(char);
    }
    return element;
}

function drawChristmasTree(y) {
    for (var i = 1; i <= y; i++) {
        console.log(drawChars(y - i, " ") + drawChars(i * 2 - 1, "*"))
    }
}

drawChristmasTree(7);