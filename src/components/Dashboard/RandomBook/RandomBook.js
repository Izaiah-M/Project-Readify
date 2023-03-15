import "./RandomBook.css";

export const RandomBook = ({ books }) => {
  return (
    <div>
      {books.map((book, index) => {
        return (
          <div key={index}>
            <img src={book.image} alt={book.title} />
            <p>{book.title}</p>
          </div>
        );
      })}
    </div>
  );
};
