import "./BookCard.css";

export const BookCard = ({ image, title }) => {
  return (
    <div className="book-card">
      <img src={image} alt={title} />
      <p>{title}</p>
    </div>
  );
};
