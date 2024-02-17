
//wap to add element in the array if element already exist , then remove that  element  frist & then add
let arr = [10,20,30,40]
console.log("Orignal values",arr)
// Remove Value
arr.pop()
console.log("Remove Value",arr)
//Add Value
arr.push(40)
console.log("Add Value",arr)


// wap to check particular string is present in she the array or not present than add that element in the array

let stringArray = [ "anurag","ashis","sahil","abhisek"]
const searchElement = "anurag";
console.log(searchElement.includes(searchElement.toLocaleLowerCase()))
const newElement = "ram"
stringArray.push(newElement)
console.log(stringArray)


// make a movie flitter pragram  whan &  we can fillter movie by rating , name , popular , filter by actor , filter by song 

const movie = [
    { id:1, name: "The Shawshank Redemption", rating: 9.3, popularity: "High", actors: ["Tim Robbins", "Morgan Freeman"], songs: ["The Marriage of Figaro", "Duettino-Sull'aria"] },
    {id:2, name: "The Godfather", rating: 9.2, popularity: "avrage", actors: ["Marlon Brando", "Al Pacino"], songs: ["Speak Softly, Love", "The Godfather Waltz"] },
    {id:3, name: "The Dark Knight", rating: 9.0, popularity: "medim", actors: ["Christian Bale", "Heath Ledger"], songs: ["Why So Serious?", "Like a Dog Chasing Cars"] },
    { id:4,name: "Inception", rating: 8.8, popularity: "low", actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt"], songs: ["Non, Je Ne Regrette Rien"] },
];


const filltersearch= "high"
const fillterData = movie.filter((Product) => Product. popularity.toLocaleLowerCase() == filltersearch)
console.log(fillterData)










