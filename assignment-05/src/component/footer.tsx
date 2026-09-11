import logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="mt-20 w-full border-t border-slate-100 bg-white text-sm text-slate-500">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">

          {/* Brand */}

          <div>
            <img src={logo} alt="DevStack Logo" className="h-8 w-auto" />
            <p className="mt-4 max-w-xs text-xs leading-relaxed text-slate-400">
              Curated tools, technologies, and resources for developers building modern software.
            </p>

            {/* Social Links */}
            
            <div className="mt-4 flex gap-4 text-xs font-medium">
              <a href="https://github.com/Sabbirromanbai" target="_blank" rel="noreferrer" className="hover:text-slate-900 transition-colors">
                GitHub
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-slate-900 transition-colors">
                Twitter
              </a>
              <a href="https://www.linkedin.com/in/md-sabbir-roman-9000593b6/" target="_blank" rel="noreferrer" className="hover:text-slate-900 transition-colors">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Nav*/}

          <div className="grid grid-cols-3 gap-6">
            <div>
              <h4 className="mb-4 text-xs font-bold uppercase text-slate-900">Product</h4>
              <div className="space-y-3 text-xs">
                <a href="#home" className="block hover:text-slate-900">Home</a>
                <a href="#technologies" className="block hover:text-slate-900">Technologies</a>
                <a href="#projects" className="block hover:text-slate-900">Projects</a>
              </div>
            </div>

            <div>
              <h4 className="mb-4 text-xs font-bold uppercase text-slate-900">Company</h4>
              <div className="space-y-3 text-xs">
                <a href="#about" className="block hover:text-slate-900">About</a>
                <a href="#contact" className="block hover:text-slate-900">Contact</a>
                <a href="#careers" className="block hover:text-slate-900">Careers</a>
              </div>
            </div>

            <div>
              <h4 className="mb-4 text-xs font-bold uppercase text-slate-900">Legal</h4>
              <div className="space-y-3 text-xs">
                <a href="#privacy" className="block hover:text-slate-900">Privacy</a>
                <a href="#terms" className="block hover:text-slate-900">Terms</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-6 text-[11px] text-slate-400 sm:flex-row">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#privacy" className="hover:text-slate-600">Privacy Policy</a>
            <a href="#terms" className="hover:text-slate-600">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;