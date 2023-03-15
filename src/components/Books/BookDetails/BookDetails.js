import "./BookDetails.css";

export const BookDetails = ({
  image,
  title,
  author,
  description,
  category,
}) => {
  return (
    <div className="details">
      <div className="book-img">
        <img src={image} alt={title} />
        <p>{title}</p>
      </div>

      <div>
        <p>{description}</p>
      </div>

      <div>
        <p>Authors: {author}</p>
      </div>

      <div>
        <p>{category}</p>
      </div>
    </div>
  );
};
