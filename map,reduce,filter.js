// const coding = ["js", "ruby", "java", "python", "cpp"];
// const values = coding.forEach((item) => {return item})
// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const values = myNums.filter ( item => item >= 4);
// const values = myNums.filter((item) => {
//   return item >= 4;
// });
// console.log(values);

const newNums = []
myNums.forEach((num) =>{
    if(num > 4){
        newNums.push(num)
    }
})
console.log(newNums)

const books = [
    {
      "author": "Chinua Achebe",
      "country": "Nigeria",
      "imageLink": "images/things-fall-apart.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
      "pages": 209,
      "title": "Things Fall Apart",
      "year": 1958
    },
    {
      "author": "Hans Christian Andersen",
      "country": "Denmark",
      "imageLink": "images/fairy-tales.jpg",
      "language": "Danish",
      "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
      "pages": 784,
      "title": "Fairy tales",
      "year": 1836
    },
    {
      "author": "Dante Alighieri",
      "country": "Italy",
      "imageLink": "images/the-divine-comedy.jpg",
      "language": "Italian",
      "link": "https://en.wikipedia.org/wiki/Divine_Comedy\n",
      "pages": 928,
      "title": "The Divine Comedy",
      "year": 1315
    },
    {
      "author": "Unknown",
      "country": "Sumer and Akkadian Empire",
      "imageLink": "images/the-epic-of-gilgamesh.jpg",
      "language": "Akkadian",
      "link": "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
      "pages": 160,
      "title": "The Epic Of Gilgamesh",
      "year": -1700
    },
    {
      "author": "Unknown",
      "country": "Achaemenid Empire",
      "imageLink": "images/the-book-of-job.jpg",
      "language": "Hebrew",
      "link": "https://en.wikipedia.org/wiki/Book_of_Job\n",
      "pages": 176,
      "title": "The Book Of Job",
      "year": -600
    },
    {
      "author": "Unknown",
      "country": "India/Iran/Iraq/Egypt/Tajikistan",
      "imageLink": "images/one-thousand-and-one-nights.jpg",
      "language": "Arabic",
      "link": "https://en.wikipedia.org/wiki/One_Thousand_and_One_Nights\n",
      "pages": 288,
      "title": "One Thousand and One Nights",
      "year": 1200
    },
    {
      "author": "Unknown",
      "country": "Iceland",
      "imageLink": "images/njals-saga.jpg",
      "language": "Old Norse",
      "link": "https://en.wikipedia.org/wiki/Nj%C3%A1ls_saga\n",
      "pages": 384,
      "title": "Nj\u00e1l's Saga",
      "year": 1350
    },
    {
      "author": "Jane Austen",
      "country": "United Kingdom",
      "imageLink": "images/pride-and-prejudice.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Pride_and_Prejudice\n",
      "pages": 226,
      "title": "Pride and Prejudice",
      "year": 1813
    },
    {
      "author": "Honor\u00e9 de Balzac",
      "country": "France",
      "imageLink": "images/le-pere-goriot.jpg",
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/Le_P%C3%A8re_Goriot\n",
      "pages": 443,
      "title": "Le P\u00e8re Goriot",
      "year": 1835
    },
    {
      "author": "Samuel Beckett",
      "country": "Republic of Ireland",
      "imageLink": "images/molloy-malone-dies-the-unnamable.jpg",
      "language": "French, English",
      "link": "https://en.wikipedia.org/wiki/Molloy_(novel)\n",
      "pages": 256,
      "title": "Molloy, Malone Dies, The Unnamable, the trilogy",
      "year": 1952
    },
    {
      "author": "Giovanni Boccaccio",
      "country": "Italy",
      "imageLink": "images/the-decameron.jpg",
      "language": "Italian",
      "link": "https://en.wikipedia.org/wiki/The_Decameron\n",
      "pages": 1024,
      "title": "The Decameron",
      "year": 1351
    },
    {
      "author": "Jorge Luis Borges",
      "country": "Argentina",
      "imageLink": "images/ficciones.jpg",
      "language": "Spanish",
      "link": "https://en.wikipedia.org/wiki/Ficciones\n",
      "pages": 224,
      "title": "Ficciones",
      "year": 1965
    },
    {
      "author": "Emily Bront\u00eb",
      "country": "United Kingdom",
      "imageLink": "images/wuthering-heights.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Wuthering_Heights\n",
      "pages": 342,
      "title": "Wuthering Heights",
      "year": 1847
    }
]

//  const userBooks = books.filter( item => item.year > 1900)
// const userBooks = books.filter( item => item.year === 1965)
let userBooks = books.filter( item => item.year > 1900)
 userBooks = books.filter( item => item.year >= 1965 && item.country === "Argentina" )

console.log(userBooks)

// after this seven.js