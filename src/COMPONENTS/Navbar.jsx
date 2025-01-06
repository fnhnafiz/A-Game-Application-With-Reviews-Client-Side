import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { BsToggleOn } from "react-icons/bs";
import { BsToggleOff } from "react-icons/bs";
import navLogo from "../../public/assets/favIcon.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, handleLogOut, changeTheme, theme } = useContext(AuthContext);
  // console.log(user);
  return (
    <nav className={`bg-[#1C1C1C] text-white p-4 ${theme}`}>
      <div className="flex items-center justify-between">
        <Link to="/">
          <div className="flex items-center gap-2">
            <div>
              <img src={navLogo} alt="" />
            </div>
            {/* Website Name/Logo */}
            <h1 className="text-2xl font-bold text-orange-500">Gauge</h1>
          </div>
        </Link>

        {/* Desktop Navbar Links */}
        <div className="hidden md:flex space-x-6">
          <NavLink to="/" className="hover:text-gray-400">
            Home
          </NavLink>
          <NavLink to="/all-reviews" className="hover:text-gray-400">
            All Reviews
          </NavLink>
          <NavLink to="/add-reviews" className="hover:text-gray-400">
            Add Review
          </NavLink>
          <NavLink
            to={`/my-reviews/${user?.email}`}
            className="hover:text-gray-400"
          >
            My Reviews
          </NavLink>
          <NavLink
            to={`/watchlist/${user?.email}`}
            className="hover:text-gray-400"
          >
            Game WatchList
          </NavLink>
        </div>

        <div className="flex items-center gap-8">
          <button onClick={changeTheme}>
            {theme === "light" ? (
              <BsToggleOff className="text-2xl" />
            ) : (
              <BsToggleOn className="text-2xl" />
            )}
          </button>
          <div className="hidden md:block">
            <div>
              {user && user?.photoURL ? (
                <div className="relative group">
                  <div className="dropdown dropdown-hover z-20">
                    <div tabIndex={0} className=" m-1">
                      <img
                        src={user?.photoURL}
                        alt="User Avatar"
                        className="w-10 h-10 rounded-full cursor-pointer border-2 border-orange-500"
                      />
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu bg-base-100 rounded-box z-[1] -right-[100px] transform -translate-x-1/2  w-52 p-2 shadow"
                    >
                      <li>
                        <Link className="text-black">
                          {user?.displayName || "No User"}
                        </Link>
                      </li>
                      <li>
                        <Link>
                          {user && (
                            <button
                              onClick={handleLogOut}
                              className="bg-orange-500 w-full text-black px-4 py-2 rounded-md hover:bg-orange-600"
                            >
                              Sign Out
                            </button>
                          )}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <Link to="/login">
                  <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">
                    Login
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`text-white 
          ${theme}`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 p-4 space-y-4">
          <NavLink to="/" className="block text-white">
            Home
          </NavLink>
          <NavLink to="/all-reviews" className="block text-white">
            All Reviews
          </NavLink>
          <NavLink to="/add-reviews" className="block text-white">
            Add Review
          </NavLink>
          <NavLink
            to={`/my-reviews/${user?.email}`}
            className="block text-white"
          >
            My Reviews
          </NavLink>
          <NavLink to="/watchlist" className="block text-white">
            Game WatchList
          </NavLink>
          {/* <Link to="login">
            <button className="bg-green-500 text-white w-full py-2 rounded-md hover:bg-green-600">
              Login
            </button>
          </Link> */}
          <div>
            {user && user.photoURL ? (
              <div className="relative group">
                {/* <img
                src={user.photoURL}
                alt="User Avatar"
                className="w-10 h-10 rounded-full cursor-pointer border-2 border-orange-500"
              /> */}
                {/* absolute left-1/2 transform -translate-x-1/2 bottom-12 */}
                <div className="dropdown dropdown-hover">
                  <div tabIndex={0} role="button" className=" m-1">
                    <img
                      src={user.photoURL}
                      alt="User Avatar"
                      className="w-10 h-10 rounded-full cursor-pointer border-2 border-orange-500"
                    />
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100 rounded-box z-[1] -right-[310px] -top-4 transform -translate-x-1/2  w-52 p-2 shadow"
                  >
                    <li>
                      <Link className="text-black">
                        {user.displayName || "No User"}
                      </Link>
                    </li>
                    <li>
                      <Link>
                        {user && (
                          <button
                            onClick={handleLogOut}
                            className="bg-orange-500  w-full text-black px-4 py-2 rounded-md hover:bg-orange-600"
                          >
                            Sign Out
                          </button>
                        )}
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* <div className="absolute transform right-1/2 w-32 -translate-x-1/2 hidden group-hover:block bg-gray-800 text-white text-sm p-2 rounded shadow-md">
                {user.displayName || "No User"}
                {user && (
                  <button
                    onClick={handleLogOut}
                    className="bg-orange-500 w-full text-white px-4 py-2 rounded-md hover:bg-orange-600"
                  >
                    Sign Out
                  </button>
                )}
              </div> */}
              </div>
            ) : (
              <Link to="/login">
                <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
