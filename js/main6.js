// 1
var per = {
    name: 'bathen',
    age: 33,
    address: 'nissim aloni 1',
    floor: 6,

}
console.log(per);

console.log("*" + per.name + "*");

console.log(per.age);
per.age = 34;
console.log(per.age);

// 2
var per1 = {
    name: 'babo',
    age: 31,
    address: 'nissim aloni 1',

};

var per2 = {
    name: 'natali',
    age: 16,
    address: 'hel hazanhanim',

};
var pers = [per1, per2];
console.log(pers[1]);

console.log(pers[1].name);

for (i = 0; i < pers.length; i++) {
    console.log(pers[i]);
    if (pers[i].age >= 18) {
        console.log('Welcome');
}
    else {
        console.log('Maybe next time');
    }
}