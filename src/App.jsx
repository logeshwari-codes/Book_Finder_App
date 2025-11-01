import React, { useState } from "react";
import axios from "axios";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import SearchBar from "./Components/SearchBar";
import BookList from "./Components/BookList";
import "./App.css";

const App = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchBooks = async (query) => {
    setLoading(true);
    setError("");
    setBooks([]);

    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}`
      );
      if (response.data.items?.length) {
        setBooks(response.data.items);
      } else {
        setError("No books found. Try another search!");
      }
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <Header />
      <main>
        <SearchBar onSearch={searchBooks} />
        {loading && <div className="loader"></div>}
        {error && <p className="error">{error}</p>}
        {!loading && !error && <BookList books={books} />}
      </main>
      <Footer />
    </div>
  );
};

export default App;
