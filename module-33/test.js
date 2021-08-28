const data = {
    result: [{
        userName: {
            title: 'Mr.',
            name1: "sakib khan"
        }
    }]
}
const name1 = data.result[0].userName.name1;
console.log(name1);
// How would you access "sakib khan" ?

//Which array method will you use to obtain an array containing the cubes of array p?

let x = [1, 2, 3];
let a = x.map(n => Math.pow(n, 3));
console.log(a);

let p = [1, 2, 3];
let q = p.filter(n => Math.pow(n, 3));
console.log(q);

const bondCode = ` I am Fake James bond . My new code is: 00 ${7 + 1 + 2}`;
console.log(bondCode);

// How will you handle the error ?