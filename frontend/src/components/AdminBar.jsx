import React from "react";
import { ToastContainer, toast } from "react-toastify";
import helper from "../../api/admin/auth.api.js"; // Ensure the path is correct
const { logout } = helper;

const Navbar = () => {
  const handleLogout = (e) => {
    toast("Good bye ❤️");
    e.preventDefault();
    logout();
    setTimeout(() => {
      window.location.href = "/";
    }, 1500);
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="light"
        // transition: Bounce,
      />
      {/* Same as */}
      <ToastContainer />
      <nav className="site-nav dark mb-5 site-navbar-target">
        <div className="container">
          <div className="site-navigation">
            {/* <a href="/" className="logo m-0">
              azyz_kabada<span className="text-primary">.</span>
            </a> */}

            <button
              onClick={handleLogout}
              className=" ml-auto float-right site-menu-toggle  d-inline-block d-lg-inline-block"
              style={{
                background: "none",
                border: "none",
                padding: 0,
                color: "inherit",
                cursor: "pointer",
                fontSize: "20px",
              }}
              aria-label="Logout"
            >
              <span>logout </span>
              <i class="fa-solid fa-arrow-right-from-bracket"></i>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
