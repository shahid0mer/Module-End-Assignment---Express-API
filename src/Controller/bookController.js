import { Books } from "../books.js";

// View All Books
export const viewAllBooks = (req, res) => {
  try {
    res.status(201).json(Books);
  } catch (error) {
    res.status(404).json({ message: "server error" });
  }
};

//View Single Product
export const viewSingleBook = (req, res) => {
  try {
    const bookid = parseInt(req.params.bookid);

    const book = Books.find((b) => b.id === bookid);

    book ? res.json(book) : res.status(404).json({ message: `Book not Found` });
  } catch (error) {
    res.status(404).json({ message: `server error` });
  }
};

//Create A Book
export const createBook = (req, res) => {
  try {
    const { id, title, author, year } = req.body;

    if (!id || !title || !author || !year) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newBook = {
      id,
      title,
      author,
      year,
    };
    Books.push(newBook);

    res.status(201).json({ message: "Book added successfully", book: newBook });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

//Update A Book
export const updateBook = (req, res) => {
  try {
    const { title, author, year } = req.body;
    const bookid = parseInt(req.params.bookid);

    const book = Books.find((b) => b.id === bookid);

    if (!book) {
      return res.status(404).json({ message: "Book Not Found" });
    }

    if (title) book.title = title;
    if (author) book.author = author;
    if (year) book.year = year;

    res.status(200).json({ message: "Book Updated", book });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

//Delete A Book
export const deleteBook = (req, res) => {
  try {
    const bookid = parseInt(req.params.bookid);

    const bookIndex = Books.findIndex((b) => b.id === bookid);

    if (bookIndex === -1) {
      return res.status(404).json({ message: "Book not found" });
    }

    const deletedBook = Books.splice(bookIndex, 1);

    res.status(200).json({
      message: "Book deleted successfully",
      deletedBook: deletedBook[0],
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
