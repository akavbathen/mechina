function printMult(num1, num2) {
    var num3 = num1 * num2;
    console.log(num3);
}

function getMult(num1, num2) {
    var num3 = num1 * num2;
    return num3;
}

function getSum(nums) {
    var sum = 0;
    for (var i = 0; i < nums.length; i++) {
        sum = nums[i] + sum;
    }
    return sum;
}

// 1
printMult(2, 17);
printMult(20, 5);

// 2
var res = getMult(3, 20);
console.log("The mult is:" + res);

// 3
var names = ['Bathen', 'Pavel', 'Tom', 'Natali'];
console.log(names.length);
console.log(names[1]);
console.log(names[names.length - 1]);

for (var i = 0; i < names.length; i++) {
    console.log(i);
    console.log(names[i]);
    if (names[i] === 'Bathen') {
        console.log("Hey! I know you!");
    }
}

// 4
var minIndex = 0;
var num = [3, 6, 2, 8, 3, 9];
var minNumber = 10;
for (var i = 0; i < num.length; i++) {
    console.log(num[i]);

    if (num[i] < minNumber) {
        minNumber = num[i];
        minIndex = i;
    }
}

console.log(" min number is: " + minNumber);
console.log('The place is :' + minIndex);

// 5
var c = getSum(num);
console.log(c);
