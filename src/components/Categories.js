import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Categories = () => {
  const [datas, setDatas] = useState([]);

  const baseURL =
    "https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-categories";

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await axios.get(baseURL)
      setDatas(res.data);
    }
    fetchCategories();
  }, []);

  return (
    <div className="text-gray-800">
      <div className="max-w-6xl m-auto p-5">
        <h2 className="md:text-4xl font-bold text-center text-sky-700 md:py-5">Explore Categories</h2>
        <div className="flex flex-wrap md:justify-center justify-between md:gap-x-10">
          {datas.map((data, index) => {
            const { id, name } = data;
            return (
              <div
                key={index}
                className="md:w-[300px] w-[160px] md:my-4 my-1 md:text-sm text-[8px] border rounded-md shadow-sm text-center"
              >
                <Link to={`/detailcategories/${id}`}>
                  <p className="px-4 py-2 hover:bg-gray-50 font-semibold text-gray-600 cursor-pointer">
                    {name}
                  </p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Categories;
