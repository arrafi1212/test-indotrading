import React, { useEffect, useState } from "react";
import { IoIosPhonePortrait } from "react-icons/io";

function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.pageYOffset > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`all-nav ${isSticky ? "sticky-top" : ""}`}>
      <div className="download flex items-center bg-white p-2 justify-between hidden md:flex">
        <div className="right-download flex items-center pl-3">
          <IoIosPhonePortrait size={18} />
          <ul>
            <li>
              <a className="text-sm text-red-500 ml-2" href="#">
                Download Indotrading App
              </a>
            </li>
          </ul>
        </div>
        <div className="text-xs flex gap-3 ml-2 pr-5">
          <ul>
            <li>
              <a href="#">Minta Penawaran</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Cari Proyek</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Bantuan</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Hubungi Kami</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-container">
        <div
          className={`navbar bg-white z-50 shadow-md ${
            isSticky ? "sticky" : ""
          }`}
        >
          <div className="flex-1">
            <img
              alt="Indotrading Logo"
              src="https://resources.indotrading.com/frontend/images/logo.png"
              width={200}
              height={200}
              className="pl-3"
            />
          </div>
          <div className="flex-none gap-2">
            <div className="form-control">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered md:w-auto"
              />
            </div>
            <div className="dropdown dropdown-end pr-3">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="User Avatar"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
