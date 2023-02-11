import React, { Component } from 'react';

class BookView extends Component {
  render() {
    const { book, onBackClick } = this.props;
    return (
      <div className="p-10">
        <div>
          <img src={book.image} />
        </div>
        <div className="my-3">
          <span className="font-bold">Title: </span>
          <span>{book.title}</span>
        </div>
        <div>
          <span className="font-bold ">Author: </span>
          <span>{book.author}</span>
        </div>
        <div className="my-4">
          <span className="font-bold">Publisher: </span>
          <span>{book.publisher}</span>
        </div>
        <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 my-2 px-4 rounded"
        onClick={onBackClick}>Back</button>
      </div>
    );
  }
}

export default BookView;