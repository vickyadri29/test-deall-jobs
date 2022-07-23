import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const baseURL =
  "https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-categories";

const Categories = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    axios
      .get(baseURL)
      .then((res) => {
        console.log(res.data);
        setDatas(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="text-gray-800">
      <div className="max-w-6xl m-auto p-5">
        <h2 className="md:text-3xl font-semibold">
          Explore Categories
        </h2>
        <div className="flex flex-wrap justify-center gap-x-10">
          {datas.map((data, index) => {
            const { id, name } = data;
            return (
              <div key={index} className="border md:w-[300px] my-4 rounded-md shadow-sm text-center">
                <Link to={`/detailcategories/${id}`}><p className="px-4 py-2 cursor-pointer hover:bg-gray-50">{name}</p></Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Categories;
