import { useState } from "react";

import { useStore } from "../../store";

/* eslint-disable react/prop-types */
export const BookComponent = (props) => {
  const { book } = props;

  const [showDescription, setShowDescription] = useState(false);

  const addBookToCart = useStore((state) => state.addBookToCart);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        alignSelf: "center",
        overflow: "hidden",
        borderRadius: "15px",
        boxShadow: "5px 5px 10px #afafaf",
        maxWidth: "300px",
        maxHeight: "400px",
        cursor: "pointer",
        position: "relative",
      }}
      onMouseEnter={() => setShowDescription(true)}
      onMouseLeave={() => setShowDescription(false)}
      onClick={() => addBookToCart(book)}
    >
      <img
        width="100%"
        height="60%"
        src={book.imageLink}
        alt={book.title}
        style={{ objectFit: "contain" }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "5px",
          marginInline: "10px",
        }}
      >
        <h3 style={{ fontSize: "18px" }}>{book.title}</h3>
        <h5 style={{ fontSize: "15px" }}>{book.author}</h5>
        <p style={{ fontSize: "15px" }}>
          <b>Category: </b>
          <em>{book.category}</em>
        </p>
        <p>
          <b>Available: </b>
          {book.availableCopies}
        </p>
        <p>
          <b>Ratings: </b>
          {book.rating} / 5
        </p>
      </div>

      {showDescription ? (
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            overflow: scroll,
            backgroundColor: "#cc1d5e",
            color: "white",
            padding: "10px",
          }}
        >
          <b>Description: </b>
          <p>{book.description}</p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
