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
    console.log('Enjoy your ' + drink_name +'!');
}



var score = 1;
function multTen() {
score = score * 10;
console.log(score);

}

multTen();
//alcoholAgeCheck();
//alcoholAgeCheck();
//alcoholAgeCheck();