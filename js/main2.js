//alcoholAgeCheck();
//alcoholAgeCheck();
//alcoholAgeCheck();
//calculateMult();
//resetScore();
//multTen();

function alcoholAgeCheck() {
    var userName = prompt('What is your name?');
    var age = prompt('What is your age?');
    if (age >= 18) {
        console.log(
            'Welcome ' +
            userName +
            ', you are ' +
            age +
            ', so you are old enough to buy Beer'
        );
    } else {
        console.log(
            'We are sorry, ' +
            userName +
            ', you are ' +
            age +
            ', and it means that you are too young for buying Beer'
        );
    }

}
function drink() {
    var drink_name = prompt('what your favorite drink?');
    console.log('Enjoy your ' + drink_name + '!');
}



var score = 1;
function multTen() {
    score = score * 10;
    console.log(score);

}

function resetScore() {
    score = score * 10;
    console.log(score);
    if (score > 100000) {
        score = 1;
        console.log(score);

    }
}
function calculateMult() {
    var use1 = prompt('give me number pleas?');
    var use2 = prompt('give me number pleas?');
    var use3 = prompt('give me number pleas?');
    console.log(' their multi plication of 3 number ' + use1 * use2 * use3);
}

