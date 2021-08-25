// constructor is just a function
// Now we can added a Prototype Method into it
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

// Create a getSummary Prototype
Book.prototype.getSummary = function () {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};

// Get how long this book already written
Book.prototype.getYearOfBookWritten = function () {
  const longWrittenBook = new Date().getFullYear() - this.year;

  return `${this.title} is ${longWrittenBook} years old now since it was written by ${this.author} and not been Revise Yet`;
};

// Manipulate the year
Book.prototype.revise = function (newYear) {
  this.year = newYear;
  this.revise = true;
};
// then Instatiate the Book constructor
const book1 = new Book("Book1", "John Doe", "1940");

// print out to the console
console.log(book1.getSummary());
console.log(book1.getYearOfBookWritten());

book1.revise(2021);
console.log(book1);
