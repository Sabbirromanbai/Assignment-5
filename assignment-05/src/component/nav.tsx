import logo from "../assets/logo-text.png";

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          
          {/* Mobile Hamburger (Left - only on mobile) */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="cursor-pointer p-1 text-2xl text-slate-700 hover:text-slate-900"
              aria-label="Open Menu"
            >
              ☰
            </button>
          </div>

          {/* Logo (Desktop: Left | Mobile: Center) */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="DevStack Logo" className="h-8 w-auto md:h-9" />
          </div>

          {/* Desktop Menu Links (Center - hidden on mobile) */}
          <div className="hidden items-center gap-8 md:flex">
            <a href="#home" className="text-sm font-semibold text-pink-600">
              Home
            </a>
            <a href="#technologies" className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900">
              Technologies
            </a>
            <a href="#projects" className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900">
              Projects
            </a>
            <a href="#about" className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900">
              About
            </a>
            <a href="#contact" className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900">
              Contact
            </a>
          </div>

          {/* Both Buttons on Right (Sign In & Sign Up) */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              className="cursor-pointer rounded-xl px-3 py-1.5 text-xs font-semibold text-slate-700 transition-colors hover:text-slate-900 sm:px-4 sm:py-2 sm:text-sm"
            >
              Sign In
            </button>
            <button
              type="button"
              className="cursor-pointer rounded-xl bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-3 py-1.5 text-xs font-semibold text-white shadow-md transition-all hover:opacity-90 sm:px-4 sm:py-2 sm:text-sm"
            >
              Sign Up
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}