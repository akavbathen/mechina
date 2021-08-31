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
    if (igul === true) {
        igul = false;
        el_ball1.style.borderRadius = '10%';
    } else {
        igul = true;
        el_ball1.style.borderRadius = '50%';
    }
}
