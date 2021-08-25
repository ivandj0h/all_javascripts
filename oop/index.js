// Object Literals
const book1 = {
  // create the objects
  title: "Book One",
  author: "John Doe",
  year: "2021",

  // we can actually add a function in this Object Literals
  getSumarry: function () {
    return `${this.title} was written by ${this.author}`;
  },
};

// now we can printed out
console.log(book1.getSumarry());

// ES5 Constructor function & Prototype

// ES Classes (syntatic sugar)
