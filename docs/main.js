var output = document.getElementById('output');
var counter = null;

var initCounter = new XMLHttpRequest();

initCounter.open('PUT', 'http://127.0.0.1:3000', true);
initCounter.onload = function() {
    if(this.status == 200) {
        var response = JSON.parse(this.responseText);
        document.getElementById('output').innerHTML = response.count;
    }
}
initCounter.send();

function minus () {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'http://127.0.0.1:3000/minus', true);

    xhr.onload = function () {
        if (this.status == 200) {
            var response = JSON.parse(this.responseText);
            counter = response.count;
            output.innerHTML = counter;
        }
    }
    xhr.send();
}

function plus () {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://127.0.0.1:3000/plus', true);
    xhr.onload = function () {
        if (this.status == 200) {
            var response = JSON.parse(this.responseText);
            counter = response.count;
            output.innerHTML = counter;
        }
    }
    xhr.send();

    output.innerHTML = parseInt(output.innerHTML) + 1;
}