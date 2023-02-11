import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BookCard extends Component {
  render() {
    const { book, onBookClick } = this.props;
    return (
      (!book.image.includes('undefined')) && 
      <div className="mb-15"
        onClick={() => {
          console.log(10);
          onBookClick(book);
        }}
      >
        <img src={book.image} alt="" /> 
        <div>
          {book.title}
        </div>
      </div>
    );
  }
}

BookCard.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string
  }).isRequired,
  onBookClick: PropTypes.func.isRequired
};

export default BookCard;