import logo from "../assets/logo.svg";
import { FaWhatsapp, FaInstagram, FaRocketchat } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="text-gray-800 bg-slate-100">
      <div className="max-w-6xl m-auto p-5">
        <div className="flex md:justify-between justify-center flex-wrap py-5">
          <div>
            <img src={logo} alt="" className="lg:w-36 w-40 py-1" />
          </div>
          <div className="md:text-left text-center md:my-0 my-5">
            <h2 className="font-bold text-xl px-1">Contact Us</h2>
            <p className="mb-4 px-1 font-medium">Monday-Sunday, 08.00-22.00</p>
            <ul className="">
              <li className="flex md:justify-start items-center justify-center p-1 font-semibold">
                <FaWhatsapp />
                <span className="mx-2">+62 899-9117-797</span>
              </li>
              <li className="flex md:justify-start items-center justify-center p-1 font-semibold">
                <FaRocketchat />{" "}
                <span className="mx-2">halo@sejutacita.id</span>
              </li>
              <li className="flex md:justify-start items-center justify-center p-1 font-semibold">
                <FaInstagram /> <span className="mx-2">@sejutacita.id</span>
              </li>
              <li className="flex md:justify-start items-center justify-center p-1 font-semibold">
                <FaInstagram />{" "}
                <span className="mx-2">@sejutacita.futureleaders</span>
              </li>
            </ul>
          </div>
          <div className="md:text-left text-center md:my-0 my-5">
            <div>
              <h2 className="font-bold text-xl px-1">Office</h2>
              <p className="mb-4 px-1 font-medium">Closed temporarily due to Covid-19</p>
            </div>
            <div>
              <h2 className="font-bold text-xl px-1">Matrix Smart Suite</h2>
              <div className="px-1 text-[15px] font-medium">
                <p>Cibis Nine Building Lt. 11</p>
                <p>Jl. TB Smatupang No.2, RT.13/RW.5,</p>
                <p>Cilandak Tim., Kec. Ps. Minggu,</p>
                <p>Kota Jakarta Selatan,</p>
                <p>Daerah Khusus Ibukota Jakarta 12560</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-800 p-4">
        <p className="max-w-6xl m-auto md:text-left text-center md:text-base text-xs text-white p-5 font-semibold">&copy; Copyright 2022, <span className="italic">All Rights Reserved.</span></p>
      </div>
    </div>
  );
};

export default Footer;
