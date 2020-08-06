let texts = document.getElementsByClassName('highlight');

for (let index = 0; index < texts.length; index++) {
    texts[index].style.backgroundColor = randColor2();
}

function randColor2() {
    var r = ('0'+(Math.random()*256|0).toString(16)).slice(-2),
        g = ('0'+(Math.random()*256|0).toString(16)).slice(-2),
        b = ('0'+(Math.random()*256|0).toString(16)).slice(-2);
    return '#' +r+g+b;
}