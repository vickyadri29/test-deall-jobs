import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Navbar from "./Navbar";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const DetailBooks = () => {
  const [detailCategories, setDetailCategories] = useState([]);
  const [query, setQuery] = useState("");
  
  const params = useParams();
  
  const baseURL = `https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-books?categoryId=${params.id}&size=15`

  useEffect(() => {
    const fetchDetailCategories = async () => {
      const res = await axios.get(baseURL);
      console.log(res.data);
      setDetailCategories(res.data);
    };
    fetchDetailCategories();
  });

  return (
    <div className="text-gray-800">
      <Navbar />
      <div className="max-w-6xl m-auto">
        <div className="">
          <input
            type="search"
            name="search"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
            className="m-5 form-control flex-auto min-w-0 px-3 py-1.5 text-base font-normal text-gray-700 border rounded transition ease-in-out focus:border-slate-500 focus:outline-none"
          />
        </div>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
          className="md:h-[450px] h-[380px]"
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {detailCategories.filter(category => category.title.toLowerCase().includes(query)).map((category, index) => {
            const { title, authors, cover_url } = category;
            return (
              <SwiperSlide key={index}>
                <div key={index} className="flex flex-col items-center my-5">
                  <img
                    src={cover_url}
                    alt=""
                    className="md:w-[200px] w-[100px] rounded-sm"
                  />
                  <p className="font-semibold p-1">{title}</p>
                  <p className="md:text-[13px]">{authors}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default DetailBooks;
