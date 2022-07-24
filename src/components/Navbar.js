import { Link } from "react-router-dom";

// Import Logo
import logo from '../assets/logo.svg'


const Navbar = () => {
  return (
    <div className="sticky z-10 top-0 bg-slate-50 shadow-md">
      <nav className="max-w-6xl m-auto text-gray-800 p-5">
        <div className="flex justify-between items-center">
          <Link to={"/"}><img src={logo} alt="" className="w-28 h-full"/></Link>
          <p className="md:text-base text-sm font-medium">👋Hi, <span className="font-bold">Vicky Herdiansyah Adri</span></p>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
