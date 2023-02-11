import { useState, useEffect } from "react";
import { BookCard } from "../book-card/book-card";
import { BookView } from "../book-view/book-view";

export const MainView = () => {

  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  
  useEffect(() => {
    fetch("https://openlibrary.org/search.json?q=star+wars")
      .then((response) => response.json())
      .then((data) => {
        const booksFromApi = data.docs.map((doc) => {
          return {
            id: doc.key,
            title: doc.title,
            image:
`https://covers.openlibrary.org/b/id/${doc.cover_i}-L.jpg`,
            author: doc.author_name?.[0]
          };
        });

        setBooks(booksFromApi);
      });
  }, []);

  if (selectedBook) {
    return <BookView book={selectedBook} onBackClick={() => setSelectedBook(null)}/>;
  }
  if (books.length === 0) {
    return <div>Loading files</div>;
  }
  return (
    <div className="p-5 grid grid-cols-4 gap-4">
      {books.map((book) => (
        
        <BookCard 
        key={book.id} 
        book={book} 
        // pass the onbook click function as props
        onBookClick={(newSelectedBook) => {
          // updates the state of selected book
          setSelectedBook(newSelectedBook);
        }}
        />
      ))}
    </div>
  );
};
