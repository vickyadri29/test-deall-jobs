import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Navbar from "./Navbar";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const DetailCategories = () => {
  const [detailCategories, setDetailCategories] = useState([]);
  const [query, setQuery] = useState("");

  const params = useParams();

  const baseURL = `https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-books?categoryId=${params.id}&size=15`;

  useEffect(() => {
    const fetchDetailCategories = async () => {
      const res = await axios.get(baseURL);
      setDetailCategories(res.data);
    };
    fetchDetailCategories();
  });

  return (
    <div className="text-gray-800">
      <Navbar />
      <div className="max-w-6xl m-auto">
        <input
          type="search"
          name="search"
          placeholder="Search the book"
          onChange={(e) => setQuery(e.target.value)}
          className="md:m-5 m-3 mx-5 w-[240px] h-[30px] md:text-base text-[10px] px-3 py-1.5 text-gray-700 border rounded transition ease-in-out focus:border-slate-500 focus:outline-none"
        />
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
          {detailCategories
            .filter((category) => category.title.toLowerCase().includes(query))
            .map((category, index) => {
              const { title, authors, cover_url } = category;
              return (
                <SwiperSlide key={index}>
                  <div
                    key={index}
                    className="flex flex-col md:items-center md:my-5 mx-5"
                  >
                    <img
                      src={cover_url}
                      alt=""
                      className="md:w-[180px] w-[100px] rounded-lg cursor-pointer"
                    />
                    <p className="md:text-sm text-[6px] pt-[5px] font-semibold">
                      {title}
                    </p>
                    <p className="md:text-sm text-[6px]">{authors}</p>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </div>
  );
};

export default DetailCategories;
