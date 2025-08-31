import { BookCard } from "@/components/book-card";
import { Book, BookData } from "@/data/book";

export const BookCards = () => {
  return (
      <div className="grid md:grid-cols-2 gap-6 py-4">
        {BookData.map((book: Book) => (
          <BookCard
            key={book.href}
            title={book.title}
            altTitle={book.altTitle}
            href={book.href}
            imgName={book.imgName}
            starred={book.starred}
          />
        ))}
      </div>
  );
};
