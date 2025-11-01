import React from "react";
import "./BookList.css";

const BookList = ({ books }) => {
  if (books.length === 0) {
    return <p className="no-results">No books found. Try searching something!</p>;
  }

  return (
    <div className="book-list">
      {books.map((book) => {
        const info = book.volumeInfo;
        return (
          <div key={book.id} className="book-card">
            <img
              src={info.imageLinks?.thumbnail || "https://via.placeholder.com/150"}
              alt={info.title}
            />
            <h3>{info.title}</h3>
            <p>{info.authors ? info.authors.join(", ") : "Unknown Author"}</p>
            <a href={info.infoLink} target="_blank" rel="noopener noreferrer">
              More Info
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default BookList;
