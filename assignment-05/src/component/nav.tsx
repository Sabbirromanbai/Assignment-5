import logo from "../assets/logo-text.png";
export function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div>
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-6 md:flex">
            <a href="#" className=" text-[#DB2777] hover:text-blue-600">
              Home
            </a>

            <a href="#" className="text-[#475569] hover:text-blue-600">
              About
            </a>

            <a href="#" className="text-[#475569] hover:text-blue-600">
              Services
            </a>

            <a href="#" className="text-[#475569] hover:text-blue-600">
              Contact
            </a>
          </div>

          {/* Sign In / Sign Up */}
          <div className="hidden items-center md:flex">
            <button className=" shadow-none btn bg-[#FFFFFF] text-[#475569] border-none rounded-r-none ">Sign In</button>

            <button className="btn btn-secondary  rounded-2xl">Sign Up</button>
          </div>

          {/* Mobile Hamburger */}
          <button className="text-2xl md:hidden">☰</button>
        </div>
      </div>
    </nav>
  );
}
