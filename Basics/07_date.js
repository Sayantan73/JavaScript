let myDate = new Date
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.getMonth() + 1);
console.log(myDate.getDay());
myDate.toLocaleString("default",{
    weekday: "long",
})

const createdDate = new Date(2024, 0, 25, 2, 47)
// const createdDate = new Date("04-25-2024")
console.log(createdDate.toDateString());
console.log(createdDate.toLocaleString());

const exactTimeStamp = Date.now()
console.log(exactTimeStamp);
console.log(Math.floor(Date.now()/1000));
console.log(createdDate.getTime());