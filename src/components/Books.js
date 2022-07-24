import axios from "axios";
import { useEffect, useState } from "react";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Books = () => {
  const [books, setBooks] = useState([]);
  
  const baseURL = "https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-books?categoryId=1&size=10";

  useEffect(() => {
    const fetchBooks = async () => {
      const res = await axios
      .get(baseURL);
      setBooks(res.data)
    }
    fetchBooks()
  }, []);

  return (
    <div className="text-gray-800 bg-gray-50">
      <div className="max-w-6xl m-auto p-5">
        <div className="">
          <h2 className="md:text-4xl font-bold text-center text-sky-700 md:py-5">
            Booku Recomendation This Week
          </h2>
        </div>
        <div className="">
          <Swiper
            // install Swiper modules
            modules={[Pagination]}
            pagination={{ clickable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log("slide change")}
            className="md:h-[400px] h-[230px]"
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
            {books.map((book, index) => {
              const { title, cover_url } = book;
              return (
                <SwiperSlide key={index}>
                  <div className="flex flex-col items-center my-5">
                    <img
                      src={cover_url}
                      alt=""
                      className="md:w-[180px] w-[100px] rounded-lg"
                    />
                    <p className="md:text-sm text-[9px] md:py-2 py-1 font-semibold">{title}</p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Books;
