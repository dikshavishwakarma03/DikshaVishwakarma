import { useState, useEffect } from 'react';

const NavBar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  const handleLogoClick = () => {
    window.location.reload();
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      style={{
        transform: show ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.3s ease-in-out',
      }}
      className="flex justify-between h-20 border bg-[rgb(10,25,47)] border-none text-white fixed top-0 w-full z-50"
    >
      <div className="flex items-center">
        <h1
          className="text-teal-300 text-3xl font-bold ml-6 cursor-pointer"
          onClick={handleLogoClick}
        >
          &lt; Diksha / &gt;
        </h1>
      </div>
      <div className="hidden md:flex items-center">
        <ul className="flex gap-8 mx-9 font-semibold text-blue-400 text-xl">
          <li className="mx-2 text-white p-2 hover:text-[rgb(100,255,218)] text-xl">
            <a href="#home">Home</a>
          </li>
          <li className="mx-2 text-white p-2 hover:text-[rgb(100,255,218)] text-xl">
            <a href="#aboutMe">About</a>
          </li>
          <li className="mx-2 text-white p-2 hover:text-[rgb(100,255,218)] text-xl">
            <a href="#skills">Skills</a>
          </li>
          <li className="mx-2 text-white p-2 hover:text-[rgb(100,255,218)] text-xl">
            <a href="#projects">Projects</a>
          </li>
          <li className="mx-2 text-white p-2 hover:text-[rgb(100,255,218)] text-xl">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      {/* Hamburger Icon */}
      <div className="md:hidden flex items-center mr-6">
        <button
          className="text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-[rgb(10,25,47)]">
          <ul className="flex flex-col items-center gap-4 py-4 font-semibold text-blue-400 text-xl">
            <li className="text-white hover:text-[rgb(100,255,218)]">
              <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
            </li>
            <li className="text-white hover:text-[rgb(100,255,218)]">
              <a href="#aboutMe" onClick={() => setMenuOpen(false)}>About</a>
            </li>
            <li className="text-white hover:text-[rgb(100,255,218)]">
              <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
            </li>
            <li className="text-white hover:text-[rgb(100,255,218)]">
              <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
            </li>
            <li className="text-white hover:text-[rgb(100,255,218)]">
              <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
