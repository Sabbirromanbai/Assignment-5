import logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="mt-20 w-full border-t border-slate-100 bg-white text-sm text-slate-500">
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
             <img src={logo} alt="" />
            </div>

            <p className="mt-4 max-w-xs text-xs leading-relaxed text-slate-400">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            {/* Social Links */}
            <div className="mt-4 flex gap-4 text-xs font-medium">
              <a href="https://github.com" className="hover:text-slate-900">
                GitHub
              </a>

              <a href="https://twitter.com" className="hover:text-slate-900">
                Twitter
              </a>

              <a href="https://linkedin.com" className="hover:text-slate-900">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-3 gap-6">
            {/* Product */}
            <div>
              <h4 className="mb-4 text-xs font-bold uppercase text-slate-900">
                Product
              </h4>

              <div className="space-y-3 text-xs">
                <a href="#home" className="block hover:text-slate-900">
                  Home
                </a>

                <a href="#technologies" className="block hover:text-slate-900">
                  Technologies
                </a>

                <a href="#projects" className="block hover:text-slate-900">
                  Projects
                </a>
              </div>
            </div>

            {/* Company */}
            <div>
              <h4 className="mb-4 text-xs font-bold uppercase text-slate-900">
                Company
              </h4>

              <div className="space-y-3 text-xs">
                <a href="#about" className="block hover:text-slate-900">
                  About
                </a>

                <a href="#contact" className="block hover:text-slate-900">
                  Contact
                </a>

                <a href="#careers" className="block hover:text-slate-900">
                  Careers
                </a>
              </div>
            </div>

            {/* Legal */}
            <div>
              <h4 className="mb-4 text-xs font-bold uppercase text-slate-900">
                Legal
              </h4>

              <div className="space-y-3 text-xs">
                <a href="#privacy" className="block hover:text-slate-900">
                  Privacy
                </a>

                <a href="#terms" className="block hover:text-slate-900">
                  Terms
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-6 text-[11px] text-slate-400 sm:flex-row">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex gap-4">
            <a href="#privacy" className="hover:text-slate-600">
              Privacy
            </a>

            <a href="#terms" className="hover:text-slate-600">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
