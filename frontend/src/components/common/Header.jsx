import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAccountContext } from "../../context/AccountContext";
import { Button } from "flowbite-react";

const Header = () => {
  const { id, setId } = useAccountContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    setId(null);
    navigate("/");
  };

  return (
    <div className="fixed w-full flex justify-between items-center p-4 bg-gray-100">
      {/* <h1 className="text-2xl font-bold">picScribe</h1>
      <div className="flex gap-4">
        {id === null ? (
          <>
            <Link className="text-blue-500" to="/login">
              Login
            </Link>
            <Link className="text-blue-500" to="/signup">
              Sign Up
            </Link>
          </>
        ) : (
          <Button onClick={handleLogout}>Logout</Button>
        )}
      </div> */}

      <>
        <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
          <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a
              href="https://flowbite.com/"
              class="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img src="./favicon.ico" class="h-8" alt="Flowbite Logo" />
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
            </a>
            <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <Button onClick={handleLogout}>Logout</Button>
            </div>
          </div>
        </nav>
      </>
    </div>
  );
};

export default Header;
