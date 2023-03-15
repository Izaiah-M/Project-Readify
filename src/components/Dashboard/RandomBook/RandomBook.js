import "./RandomBook.css";

export const RandomBook = ({ books }) => {
  return (
    <>
      <p>Reading Ideas </p>
      <div className="randbook-container">
        {books.map((book, index) => {
          return (
            <div key={index} className="randbook-card">
              <img src={book.image} alt={book.title} />
              {/* <p>{book.title}</p> */}
            </div>
          );
        })}
      </div>
    </>
  );
};
