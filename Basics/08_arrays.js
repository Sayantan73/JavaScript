const myarr =[2, 5, 7, 9]
console.log(myarr[0]);
myarr.push(11)
console.log(myarr);

myarr.pop()
console.log(myarr);

myarr.unshift(1)
console.log(myarr);

myarr.shift()
console.log(myarr);

console.log(myarr.includes(3));
console.log(myarr.indexOf(7));

const newArr = myarr.join()
console.log(newArr);

// slice , splice
console.log("A", myarr);
console.log(myarr.slice(1,3));
console.log("B", myarr);

console.log(myarr.splice(1,3));
console.log("C" , myarr);



const marvelHeros = ["Thor", "Hulk", "IronMan", "SpiderMan"]
const dcHeros = ["SuperMan", "BatMan", "Flash"]
// marvelHeros.push(dcHeros)                       // create a array's of array add array at last index

console.log(marvelHeros.concat(dcHeros));

const allHeros = [...marvelHeros, ...dcHeros]      // spread operater
console.log(allHeros);


const newBadArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
console.log(newBadArray.flat(Infinity));

console.log(Array.isArray("Karan"));
console.log(Array.from("Karan"));
console.log(Array.from({name: "karan"}));

const score1 = 100
const score2 = 200
const score3 = 300

console.log(Array.of(score1, score2, score3));

