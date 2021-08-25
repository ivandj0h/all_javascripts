// Object Literals
const book1 = {
  // create the objects
  title: "Book One",
  author: "John Doe",
  year: "2021",

  // we can actually add a function in this Object Literals
  getSumarry: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
};

// now we can printed out
console.log(book1.getSumarry());

// we can print using another way
console.log(Object.keys(book1));
console.log(Object.values(book1));
