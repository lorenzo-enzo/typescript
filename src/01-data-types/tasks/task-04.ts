/**
 * 
 * The school library is building a digital catalog to help students search for books. 
 * Every book must store its ISBN number, title, author's name, total number of pages, 
 * book category, and whether the book is currently available for borrowing.
 * 
 * Task:
 * 1. Define a proper type for the book information.
 * 2. Implement a type that you defined on 3 books data.
 * 
 * display the book data using console.log.
 */

type Book = {
    isbn: string;
    title: string;
    author: string;
    pages: number;
    category: string;
    available: boolean;
};

const book1: Book = {
    isbn: "978-3-16-148410-0",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pages: 180,
    category: "Fiction",
    available: true
};

const book2: Book = {
    isbn: "978-0-7432-7356-5",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    pages: 281,
    category: "Fiction",
    available: false
};

const book3: Book = {
    isbn: "978-0-06-112008-4",
    title: "1984",
    author: "George Orwell",
    pages: 328,
    category: "Dystopian Fiction",
    available: true
};

console.log("Book1:", book1);
console.log("Book2:", book2);
console.log("Book3:", book3);