const marvel_heroes =['thoru', 'fodu','modu'];
const dc =['bat', 'cat', 'mat']

// marvel_heroes.push(dc);
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][0])

// const newArr = marvel_heroes.concat(dc);
// console.log(newArr);

const all_new_heroes = [...marvel_heroes, ...dc];
// console.log(all_new_heroes)
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const real_another_array =another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("hitesh"));
console.log(Array.from("hitesh"));
console.log(Array.from({name:"hitesh"})); //interesting case

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3))

