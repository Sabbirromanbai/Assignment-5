import logo from "../assets/logo-text.png";

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="DevStack Logo" className="h-9 w-auto" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-8 md:flex">
            <a href="#home" className="text-sm font-semibold text-pink-600">
              Home
            </a>
            <a href="#technologies" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              Technologies
            </a>
            <a href="#about" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              About
            </a>
            <a href="#contact" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              Contact
            </a>
          </div>

          {/* Auth Buttons */}
          <div className="hidden items-center gap-3 md:flex">
            <button type="button" className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-slate-900 cursor-pointer">
              Sign In
            </button>
            <button
              type="button"
              className="rounded-xl bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-5 py-2 text-sm font-semibold text-white shadow-md hover:opacity-90 transition-all cursor-pointer"
            >
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <button type="button" className="text-2xl text-slate-700 md:hidden">
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
}