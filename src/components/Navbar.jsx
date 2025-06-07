// src/components/Navbar.jsx
import { Brain, Home, ProjectorIcon, User } from "lucide-react";
import MenuIcon from "@mui/icons-material/Menu";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const navItems = [
  { icon: <Home />, lable: "Home", route: "/" },
  { icon: <User />, lable: "About", route: "/about" },
  { icon: <Brain />, lable: "SKills", route: "/skills" },
  { icon: <ProjectorIcon />, lable: "Projects", route: "/projects" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [updateNavbar, setUpdateNavbar] = useState(false);

  useEffect(() => {
    const handleNavbar = () => {
      if (window.scrollY >= 20) {
        setUpdateNavbar(true);
      } else {
        setUpdateNavbar(false);
      }
    };

    window.addEventListener("scroll", handleNavbar);

    return () => window.removeEventListener("scroll", handleNavbar);
  }, []);

  return (
    <nav
      className={`${
        updateNavbar
          ? "fixed top-0 left-0 right-0 backdrop:blur-lg  border-b-2-gray-500  transition-all duration-300 z-50 bg-purple-800 shadow-md opacity-100 saturate-100 "
          : "top-0 left-0 right-0 fixed border-b-2-gray-500 "
      } flex items-center w-screen justify-between py-4 px-10  font-Raleway`}
    >
      <div className=" md:block text-3xl cursor-pointer hidden text-fuchsia-500 italic ">Drishti Jadhwani</div>
      <div>
        <ul className="flex flex-row gap-8 top-2 text-3xl text-white shadow-none justify-around h-auto bg-transparent">
          {navItems.map((item) => (
            <li className="relative  transition-all duration-300 ease-in-out p-1  text-xl cursor-pointer  h-fit">
              <Link to={item.route}>
                {" "}
                <span className="group hidden md:flex flex-col items-center gap-1 text-white relative">
                  <div className="flex items-center gap-2">
                    {item.icon}
                    {item.lable}
                  </div>
                  <span className="block h-[4px] w-full bg-fuchsia-400 scale-x-0 origin-left group-hover:scale-x-100 transition-transform delay-100 duration-600 ease-in-out rounded-3xl"></span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div
        className="md:hidden text-white fixed right-2 top-4 z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MenuIcon style={{ height: "30px", width: "30px" }} />
      </div>

      {/* {isOpen && (
    <div className='fixed top-full w-full min-h-screen left-0 right-0 transition-all duration-100 delay-75 backdrop-blur-md rounded-lg shadow-lg text-white bg-purple-800 opacity-100 ease-in-out px-8  z-50'>
      <ul className='flex flex-col space-y-6 text-whitetext-shadow'>
        {navItems.map((item, index) => (
          <li key={index} className='flex items-center gap-2'>
          
            <Link to={item.route} className='text-white'>
              {item.icon}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )} */}

      {isOpen && (
        <div className="absolute top-0 left-0 w-full bg-purple-800 saturate-100 opacity-100 shadow-lg rounded-b-lg transition-all duration-300 ease-in-out z-40">
          <ul className="flex flex-col gap-6 items-center px-10 text-white py-6 text-xl">
            {navItems.map((item, index) => (
              <li key={index}>
                  <Link to={item.route} onClick={()=>setIsOpen(false)}>
                <div className="h-6 flex w-24 justify-between gap-3">
                  <div>{item.icon}</div>
                  <div  className="flex-1 " >{item.lable}</div>
                </div>
                  </Link>
              </li>
            ))}
          </ul> 
          <div>
            </div> 
        </div>
        
      )}
      
    </nav>
  );
};

export default Navbar;
