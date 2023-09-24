// import { useStore } from "../../store";

import { BookComponent } from "./BookComponent";

export const BooksList = (props) => {
  // eslint-disable-next-line react/prop-types
  const { booksList } = props;
  //   const books = useStore((state) => state.books);

  return (
    <div>
      <h4
        style={{
          textAlign: "center",
          marginBottom: "20px",
          textDecoration: "underline",
        }}
      >
        Click on book to add to cart
      </h4>
      <section
        style={{
          flexGrow: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          justifyItems: "center",
          gap: "15px",
        }}
      >
        {
          // eslint-disable-next-line react/prop-types
          booksList.map((book, index) => (
            <BookComponent {...{ book }} key={index} />
          ))
        }
      </section>
    </div>
  );
};
