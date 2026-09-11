import bannersatck from "../assets/banner-stack.png";

export function Banner() {
  return (
    <section id="home" className="w-full bg-white px-4 py-12 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          
          {/* Left Text Content */}
          <div className="max-w-2xl space-y-6 lg:col-span-7">
            <h1 className="text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Build Your Ideal <br />
              <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>

            <p className="text-base text-slate-600 sm:text-lg leading-relaxed">
              Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#technologies"
                className="rounded-xl bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-pink-500/20 hover:opacity-90 transition-all cursor-pointer"
              >
                Explore Technologies
              </a>

              <button
                type="button"
                className="rounded-xl border border-slate-200 bg-slate-50 px-6 py-3.5 text-sm font-semibold text-slate-700 hover:bg-slate-100 transition-all cursor-pointer"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:col-span-5 lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-none">
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-r from-orange-500/20 via-pink-500/20 to-violet-600/20 blur-2xl"></div>
              <img
                src={bannersatck}
                alt="Development Stack Illustration"
                className="h-auto w-full rounded-2xl object-cover drop-shadow-2xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}