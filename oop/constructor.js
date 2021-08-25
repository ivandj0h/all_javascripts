// constructor is just a function
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;

  this.getSummary = function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  };
}

// then Instatiate the Book constructor
const book1 = new Book("Book1", "John Doe", "2021");

console.log(book1.getSummary());
