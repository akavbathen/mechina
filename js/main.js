// Write to the console 'Hello JS!'.
//console.log('Hello JS!');

// Define a new Variable –userName. Store your name in it.
// Write to the console: “Hello <userName>!” using this Variable.
var userName = 'bathen';
//console.log('Hello', userName + '!');

// Define 2 variables -country and city,and use prompt() to get
// from the user the value for these variables.
//var country = prompt('Please enter country');
//var city = prompt('Please enter your city');

// Define more variable –address that will contain the city and the country
//var address = country + ' ' + city;
// Write to the console the address in the following way: “The address is: <address>”
//console.log('The address is: ' + address);

// Define a new Variable –age and use prompt() to get a value from the user
//var age = prompt('What is your age?');

// Write a condition to buy alcohol - where if the age is greater than or equal to 18,
// write to the console 'Welcome<userName>, you are <age>, so you are old enough tobuy Beer',
// otherwise, write to the console 'We are sorry, <userName>,you are <age>,
// and meansthat you are too young for buying Beer'
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

// Create a new variable 'score' with a value between 1-10
var score = 10;

// If the scoreis higher than 9, print 'excellent!' to the console,
// if the scoreis between 7 and 9 inclusive,print 'good' to the console,
// else print to the console 'not enough'
if (score > 9) {
    console.log('excellent!');
} else if (score >= 7) {
    console.log('good');
} else {
    console.log('not enough');
}

// Read 2 numbers from the user(between 1 and 9)and print the bigger one
var one = prompt('choose first number please');
var two = prompt('choose second number please');
if (one >= two) {
    console.log('The biggest number is ' + one);
} else {
    console.log('The biggest number is ' + two);
}
