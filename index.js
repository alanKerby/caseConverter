document.getElementById("upper-case").addEventListener("click", function () {
    let text = document.getElementById('text-area').value;
    document.getElementById('text-area').value = text.toUpperCase()
});

document.getElementById("lower-case").addEventListener("click", function () {
    let text = document.getElementById('text-area').value;
    document.getElementById('text-area').value = text.toLowerCase()
});

document.getElementById("proper-case").addEventListener("click", function () {
    let text = document.getElementById('text-area').value;
    document.getElementById('text-area').value = text.split(' ').map(capitalize).join(' ')
});

document.getElementById("sentence-case").addEventListener("click", function () {
    let text = document.getElementById('text-area').value.toLowerCase();
    document.getElementById('text-area').value = text.split('. ').map(capitalize).join('. ')
});

function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

document.getElementById("save-text-file").addEventListener("click", function () {
    let text = document.getElementById('text-area').value;
    download("text.txt", text)
});

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}