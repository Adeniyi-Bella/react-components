import PropTypes from "prop-types"

export const BookCard = ({ book , onBookClick}) => {

  // console.log(book.image)
  return (
    (!book.image.includes("undefined")) && 
    <div className="mb-15"
    // implement the onclick that fires the onbook click function in main view
      onClick={() => {
        onBookClick(book);
      }}
    >
      <img src={book.image} alt="" /> 
      <div>
        {book.title}
      </div>
    </div>
  );
};

// Here is where we define all the props constraints for the BookCard
BookCard.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string
  }).isRequired,
  onBookClick: PropTypes.func.isRequired
};