var output = parseInt(document.getElementById('output').innerHTML);

function decrease() {
    output--;
    document.getElementById('output').innerHTML = output;
}

function increase() {
    output++;
    document.getElementById('output').innerHTML = output;
}