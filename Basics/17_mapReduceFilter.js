const coding = ["js", "java", "python", "ruby", "cpp"]

const value = coding.forEach( (item) => {
    console.log(item);
    return item                                 // forEach loop don't return anything
})

console.log(value);                             // undefined

// filter
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const val1 = myNums.filter( (item) => item > 5)

console.log(val1);


//map
const val2 = myNums.map( (item) => (item +10))

console.log(val2);


// reduce
const shopingCart = [
    {
        cource: "Javascript",
        price: 2999
    },
    {
        cource: "Python",
        price: 999
    },
    {
        cource: "Mobile Devolopment",
        price: 5999
    },
    {
        cource: "Data Science",
        price: 12999
    },
]

const totalPrice = shopingCart.reduce( (accumaletor, currentvalue) => (accumaletor + currentvalue.price), 0)
console.log(totalPrice);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const userBooks = books.filter( (bk) => (bk.genre === "History" && bk.publish >= 1995))

  console.log(userBooks);