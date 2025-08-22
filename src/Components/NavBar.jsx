import { FiMoon } from "react-icons/fi";
import { GoSun } from "react-icons/go";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../Redux/Theme";
import { useEffect } from "react";

function NavBar() {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();

  // Theme apply to body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
  }, [darkMode]);

  return (
    <nav
      className={`sticky top-0 z-50 flex items-center justify-around px-10  
      h-20 rounded-b-2xl shadow-lg backdrop-blur-md transition-all duration-500 overflow-hidden
      ${darkMode ? "bg-gray-900/80 text-white" : "bg-white/70 text-gray-900"}`}
    >
      {/* Logo */}
      <div className="flex items-center gap-2 cursor-pointer group">
        <h2
          className={`text-4xl font-extrabold tracking-widest transition-colors duration-500 
          ${darkMode ? "text-white" : "text-gray-800"}`}
        >
          KAR
          <span className="text-green-500 group-hover:text-green-400">SOO</span>
        </h2>
      </div>

      {/* Theme Toggle */}
      <div className="flex items-center">
        {darkMode ? (
          <GoSun
            className="text-4xl cursor-pointer hover:text-yellow-400 
            transition-transform duration-300 "
            onClick={() => dispatch(toggleTheme())}
          />
        ) : (
          <FiMoon
            className="text-4xl cursor-pointer hover:text-blue-500 
            transition-transform duration-300 "
            onClick={() => dispatch(toggleTheme())}
          />
        )}
      </div>
    </nav>
  );
}

export default NavBar;
