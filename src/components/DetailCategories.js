import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
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

  const baseURL = `https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-books?categoryId=${params.id}&size=20`;

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
        <div className="bg-slate-200 mx-5 mt-5 md:p-5 p-3 rounded-sm">
          <h2 className="md:text-xl text-[12px] font-bold text-slate-700">Detail Categories</h2>
        </div>
        <div className="flex justify-between items-center">
          <input
            type="search"
            name="search"
            placeholder="Search the book"
            onChange={(e) => setQuery(e.target.value)}
            className="md:m-5 m-3 mx-5 md:w-[240px] h-[30px] md:text-base text-[10px] px-3 py-1.5 text-gray-700 border rounded transition ease-in-out focus:border-slate-300 focus:outline-none"
          />
          <Link to={"/bookmarks"}><button className="md:m-5 md:text-[14px] md:w-[240px] md:py-4 h-[30px] text-[9px] px-3 m-3 mx-5 flex items-center my-2 text-white border rounded-md bg-blue-500 hover:bg-blue-600 font-semibold">
            Lihat Bookmark
          </button></Link>
        </div>
        <Swiper
          // install Swiper modules
          modules={[Pagination]}
          pagination={{ clickable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
          className="md:h-[400px]  h-[210px]"
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
              const { id, title, authors, cover_url } = category;
              return (
                <SwiperSlide key={index}>
                  <div
                    key={index}
                    className="flex flex-col md:items-center md:my-5 mx-5"
                  >
                    <Link to={`/detailbooks/${id}`} state={{ book: category }}>
                      <img
                        src={cover_url}
                        alt=""
                        className="md:w-[180px] w-[100px] rounded-lg cursor-pointer "
                      />
                    </Link>
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
