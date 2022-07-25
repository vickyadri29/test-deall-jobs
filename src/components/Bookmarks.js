import { useEffect, useState } from "react";

// Import Navbar
import Navbar from "./Navbar";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Bookmarks = () => {
  const [bookmarks, setBookmarks] = useState([]);
  useEffect(() => {
    const book = localStorage.getItem("books");
    console.log(book);
    if (book !== null) {
      setBookmarks(JSON.parse(book));
    }
  }, []);

  return (
    <div>
      <Navbar />
      <div className="max-w-6xl m-auto">
        <div className="bg-slate-200 m-5 p-3 rounded-sm">
          <h2 className="md:text-xl text-[12px] font-bold text-slate-700">
            Bookmarks List
          </h2>
        </div>
        <Swiper
          // install Swiper modules
          modules={[Pagination]}
          pagination={{ clickable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
          className="md:h-[400px]  h-[220px]"
          breakpoints={{
            320: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {bookmarks.map((bookmark, index) => (
            <SwiperSlide key={index}>
              <div
                key={index}
                className="flex flex-col md:items-center md:my-5 mx-5"
              >
                <div>
                  <img
                    src={bookmark.cover_url}
                    alt=""
                    className="md:w-[180px] w-[100px] rounded-lg"
                  />
                  <p className="md:text-sm text-[6px] pt-[5px] font-semibold">
                    {bookmark.title}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Bookmarks;
