//All of your book objects are going to be stored in an array, 
// so add a function to the script (not the constructor)that can take user’s input and store the new book objects into an array.
// Write a function that loops through the array and displays each book on the page. You can display them in some sort of table, or each on their own “card”. It might help for now to manually add a few books to your array so you can see the display.
// Add a “NEW BOOK” button that brings up a form allowing users to input the details for the new book: author, title, number of pages, whether it’s been read and anything else you might want. 
// Add a button on each book’s display to remove the book from the library.
// Add a button on each book’s display to change its read status.

const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('read').checked;
  
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
  displayBooks();
  toggleForm(); // Hide the form after adding a book
}
function toggleForm() {
  const form = document.getElementById('book-form');
  form.style.display = form.style.display === 'none' ? 'block' : 'none';
}
function displayBooks() {
  const display = document.getElementById('books');
  display.innerHTML = ''; // Clear the display
  
  myLibrary.forEach((book, index) => {
    const bookCard = document.createElement('div');
    bookCard.innerHTML = `
      <p>Title: ${book.title}</p>
      <p>Author: ${book.author}</p>
      <p>Pages: ${book.pages}</p>
      <p>Read: ${book.read ? 'Yes' : 'No'}</p>
      <button onclick="removeBook(${index})">Remove</button>
      <button onclick="toggleReadStatus(${index})">Change Read Status</button>
    `;
    display.appendChild(bookCard);
  });
}
function removeBook(index) {
  myLibrary.splice(index, 1);
  displayBooks();
}

function toggleReadStatus(index) {
  myLibrary[index].read = !myLibrary[index].read;
  displayBooks();
}
