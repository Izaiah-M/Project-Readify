import "./BookCard.css";

export const BookCard = ({ image, title }) => {
  return (
    <div className="book-card">
      <img src={image} alt={title} />
      <p className="p">{title}</p>
    </div>
  );
};
