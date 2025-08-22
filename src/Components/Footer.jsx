import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Brand / Logo */}
        <div className="text-2xl font-bold text-white">
          ✅ Todo<span className="text-green-500">App</span>
        </div>

        {/* Links */}
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-green-400">Home</a>
          <a href="#" className="hover:text-green-400">Features</a>
          <a href="#" className="hover:text-green-400">About</a>
          <a href="#" className="hover:text-green-400">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-5 text-xl">
          <a href="https://github.com/MunawarAbbas313" target="_blank" rel="noreferrer">
            <FaGithub className="hover:text-white transition" />
          </a>
          <a href="https://github.com/MunawarAbbas313" target="_blank" rel="noreferrer">
            <FaLinkedin className="hover:text-blue-400 transition" />
          </a>
          <a href="https://github.com/MunawarAbbas313" target="_blank" rel="noreferrer">
            <FaTwitter className="hover:text-sky-400 transition" />
          </a>
          <a href="mailto:your@email.com">
            <MdEmail className="hover:text-red-400 transition" />
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-sm text-gray-500 mt-6 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} TodoApp. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
