import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { auth } from "../../firebase";

import { HomeHeader } from "./HomeHeader";
import { BooksList } from "./BooksList";

import { books } from "../../data/books";

export const HomePage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [searchQuery, setSearchQuery] = useState("");
  const [booksList, setBooksList] = useState(books);

  useEffect(() => {
    if (searchQuery) {
      const books = booksList.filter((book) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setBooksList(books);
    } else {
      setBooksList(books);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  useEffect(() => {
    setTimeout(() => {
      if (!auth.currentUser) navigate("/auth", { state: { from: location } });
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        minHeight: "100vh",
        overflowX: "hidden",
        padding: "5px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <HomeHeader {...{ searchQuery, setSearchQuery }} />
      <BooksList {...{ booksList }} />
    </div>
  );
};
