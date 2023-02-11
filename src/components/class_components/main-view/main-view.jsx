import React from 'react';
import BookCard  from "../book-card/book-card";
import BookView from "../book-view/book-view";

export class MainView extends React.Component {
  state = {
    books: [],
    selectedBook: null
  };

  componentDidMount() {
    fetch("https://openlibrary.org/search.json?q=star+wars")
      .then((response) => response.json())
      .then((data) => {
        const booksFromApi = data.docs.map((doc) => {
          return {
            id: doc.key,
            title: doc.title,
            image: `https://covers.openlibrary.org/b/id/${doc.cover_i}-L.jpg`,
            author: doc.author_name?.[0]
          };
        });
        this.setState({ books: booksFromApi });
      });
  }

  handleBookClick = (newSelectedBook) => {
    this.setState({ selectedBook: newSelectedBook });
  };

  render() {
    const { selectedBook, books } = this.state;

    if (selectedBook) {
      return <BookView book={selectedBook} onBackClick={() => this.setState({ selectedBook: null })} />;
    }

    return (
      <div className="p-5 grid grid-cols-4 gap-4">
        {books.map((book) => (
          <BookCard key={book.id} book={book} onBookClick={this.handleBookClick} />
        ))}
      </div>
    );
  }
}