console.log('day 4');
function changeTextColor() {
    var el_ball1 = document.querySelector('.ball1');
    console.log(el_ball1);
    el_ball1.style.color = 'green';
}
function changeTextSize() {
    var el_ball1 = document.querySelector('.ball1');

    var size = prompt('give me size pleas?');
    if (size > 50) {
        console.log('Too big' + '!');
    } else {
        el_ball1.style.fontSize = size + 'px';
    }
}
var igul = true;
function toggleBallShape() {
    var el_ball1 = document.querySelector('.ball1');
    var el_toggle = document.querySelector('.toggle-btn');
    if (igul === true) {
        el_ball1.style.borderRadius = '10%';
        el_toggle.innerHTML = 'round';
    } else {
        el_ball1.style.borderRadius = '50%';
        el_toggle.innerHTML = 'square';
    }

    igul = !igul;
}
var margin = 10;
function moveDown() {
    margin = margin + 10;
    var el_ball1 = document.querySelector('.ball1');
    el_ball1.style.marginTop = margin + 'px';
}
