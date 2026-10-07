import { Book, type BookInfo, BookV2 } from "./book";
import "~/book_carousel.css";

export function BookCarousel({books}: {books: Array<BookInfo>}) {
  // let book_tags = books.map((book) => <Book title={book.title} authors={book.authors} img_url={book.img_url} />);
  let book_tags = books.map((book, index) => <BookV2 key={index} props={book} />);
  // let book_tags = books.map(({title, authors, img_url}) => <BookV2  {{title=title, authors=authors, img_url=img_url}} />);
  return (
    <div className="book_carousel">
      {book_tags}
    </div>
  )
}
