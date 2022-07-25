import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaBookmark, FaInfo } from "react-icons/fa";

// Import Navbar
import Navbar from "./Navbar";

const DetailBooks = () => {
  const [isBookmark, setIsBookmark] = useState(false);
  const location = useLocation();
  const { book } = location.state;

  const handleSaveBook = () => {
    const bookmarks = localStorage.getItem("books");
    if (bookmarks === null) {
      const books = [book];
      localStorage.setItem("books", JSON.stringify(books));
    } else {
      const books = JSON.parse(bookmarks);
      //   console.log(books);
      books.push(book);
      alert("Buku berhasil ditambahkan");
      localStorage.setItem("books", JSON.stringify(books));
    }
  };

  useEffect(() => {
    const bookmarks = localStorage.getItem("books");
    if (bookmarks !== null) {
      const books = JSON.parse(bookmarks);
      console.log(books);
      if (books.some((b) => b.id === book.id)) setIsBookmark(true);
    }
  }, [book]);

  return (
    <div className="">
      <Navbar />
      <div className="max-w-6xl m-auto p-5 text-slate-800">
        <div className="bg-slate-200 md:mt-5 mb-5 p-3 rounded-sm">
          <h2 className="md:text-xl text-[12px] font-bold text-slate-700">
            Detail Books
          </h2>
        </div>
        {isBookmark ? (
          <div
            class="w-72 flex items-center bg-blue-500 text-white text-sm font-bold mb-5 px-4 py-3 rounded-sm"
            role="alert"
          >
            <FaInfo />
            <p className="ml-1">Buku ini telah ditambahkan</p>
          </div>
        ) : (
          <button
            onClick={handleSaveBook}
            className="flex items-center my-2 text-white text-md border px-3 py-2 rounded-sm bg-blue-500 hover:bg-blue-600 font-semibold"
          >
            <FaBookmark /> <span className="ml-2">Add to Bookmark</span>
          </button>
        )}
        <div className="flex flex-col items-center">
          <img
            src={book.cover_url}
            alt=""
            className="md:w-[250px] w-[100px] rounded-lg drop-shadow-lg"
          />
          <div className="text-center">
            <h2 className="mt-2 font-bold text-xl">{book.title}</h2>
            <p className="text-sm font-semibold">{book.authors}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailBooks;
