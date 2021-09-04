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

// 3
var sam = 0
var nums1 = [1, 2, 3];
var nums2 = [4, 5, 6];
var nums3 = [7, 8, 9];
var mat = [nums1, nums2, nums3];

console.log(mat);

for (i = 0; i < mat.length; ++i) {
    console.log(mat[i]);
    for (j = 0; j < mat[i].length; ++j) {

        console.log(mat[i][j]);
        sam=mat[i][j]+sam;
        console.log(sam);
    }

}