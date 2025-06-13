const marvelHeros = ["ironman", "thor", "spiderman"]
const dcHeros = ["superman", "flash", "batman"]

// marvelHeros.push(dcHeros)

// console.log(marvelHeros);
// console.log(marvelHeros[3][1]);

// const allHeros = marvelHeros.concat(dcHeros)
// console.log(allHeros);   

const allNewHeros = [...marvelHeros, ...dcHeros] //array spreading (...) is called spread operator
// console.log(allNewHeros);

const anotherArr = [1, 2, 3, [4, ,5, 6], 7, [6, 7, [4, 5]]]

const realAnotherArr = anotherArr.flat(Infinity)
// console.log(realAnotherArr);



// console.log(Array.isArray("jetun"))
// console.log(Array.from("jetun patel"))
// console.log(Array.from({name: "jetun"})) //intresting

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1, score2, score3));
