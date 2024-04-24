const name = "Karan"
const repoCount = "20"
// console.log(name +repoCount);
console.log(`Hello my name is ${name} and my no of repo are ${repoCount}`);

const gameName = new String("world-Wide");
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(6));
console.log(gameName.indexOf('r'));

const newGameName = gameName.substring(6,10)
console.log(newGameName);
console.log(gameName.slice(-7, -5));
console.log(gameName.split('-'));

const newName = "   Sayantan Karan   "
console.log(newName.trim());

const url = "https://supreme-space-zebra%209r4944pvrjrc7rjq.github.dev/"
console.log(url.replace("%20", "-"));
console.log(url.includes("https://"));