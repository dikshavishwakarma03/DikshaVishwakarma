const LeftSide = () => {
  return (
    <div className="hidden md:flex bg-[rgb(10,25,47)]  fixed left-0 top-0 bottom-0 w-20 flex-col justify-end items-center pb-2 space-y-6">
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-teal-300 blue-shadow transition-all duration-300 hover:scale-150"
      >
        <i className="fab fa-github text-2xl"></i>
      </a>

      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-teal-300 transition-all duration-300 hover:scale-150"
      >
        <i className="fab fa-instagram text-2xl"></i>
      </a>

      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-teal-300 transition-all duration-300 hover:scale-150"
      >
        <i className="fab fa-linkedin text-2xl"></i>
      </a>

      <a
        href="mailto:vdiksha621@gmail.com"
        className="text-gray-400 hover:text-teal-300 transition-all duration-300 hover:scale-150"
      >
        <i className="fas fa-envelope text-2xl"></i>
      </a>

      <div className="w-0.5 h-56 bg-gray-500 "></div>
    </div>
  );
};

export default LeftSide;
