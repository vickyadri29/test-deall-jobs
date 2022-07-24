import { iconFeatures } from "../data";

const Features = () => {
    // const { iconFeatures } = iconFeatures;
  return (
    <div className="text-gray-800">
      <div className="max-w-6xl m-auto p-5">
        <h2 className="md:text-4xl font-bold text-center text-sky-700 md:py-5">
          Aplikasi No. 1 Mahasiswa & Pelajar
        </h2>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-7 my-5">
          {iconFeatures.map((icon) => (
            <div className="flex flex-col border rounded-2xl shadow-md p-4 cursor-pointer hover:shadow-lg">
              <div className="flex items-center">
                <img src={icon.img} alt="" className="md:w-10 w-7"/>
                <h3 className="md:ml-4 ml-2 md:text-xl text-sm font-bold">{icon.title}</h3>
              </div>
              <p className="md:py-5 py-2 md:leading-5 md:text-xs text-[9px] font-semibold ">
                {icon.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
