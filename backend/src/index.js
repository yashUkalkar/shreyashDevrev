import express from "express";
import cors from "cors";

import dotenv from "dotenv";
dotenv.config();

// Books data
import { books } from "./books.js";

const PORT = Number(process.env.PORT) || 6001;
const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:5173";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: CLIENT_URL,
  })
);

app.get("/books", (req, res) => {
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);
  const searchValue = req.query.searchValue;

  if (!searchValue) return res.sendStatus(400);

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchValue.toLowerCase())
  );
  // ||
  // books.filter((book) =>
  //   book.author.toLowerCase().includes(searchValue.toLowerCase())
  // ) ||
  // books.filter((book) =>
  //   book.category.toLowerCase().includes(searchValue.toLowerCase())
  // );

  const dataToReturn = {};
  dataToReturn.totalResults = filteredBooks.length;
  if (startIndex > 0) {
    dataToReturn.previous = {
      page: page - 1,
      limit: limit,
    };
  }
  if (endIndex < filteredBooks.length) {
    dataToReturn.next = {
      page: page + 1,
      limit: limit,
    };
  }
  dataToReturn.books = filteredBooks.slice(startIndex, endIndex);
  res.json(dataToReturn);
});

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
