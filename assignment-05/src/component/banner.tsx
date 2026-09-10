import bannersatck from "../assets/banner-stack.png";
export function Banner() {
  return (
    <section className="mt-5 w-full bg-white px-6 py-12 font-sans text-slate-800 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">

          {/* Left Text Content */}
          <div className="max-w-2xl space-y-6 lg:col-span-7">
            <h1 className="text-4xl font-extrabold leading-[1.15] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Build Your Ideal <br />

              <span className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>

            <p className="text-base leading-relaxed text-slate-500 sm:text-lg">
              Explore frontend, backend, database, and tooling options,
              compare them side by side, and put together the stack that
              fits your next project.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                className="rounded-xl bg-linear-to-r from-orange-500 to-pink-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition-all hover:opacity-90 cursor-pointer "
              >
                Explore Technologies
              </button>

              <button
                type="button"
                className="rounded-xl border border-slate-200 bg-slate-50 px-6 py-3.5 text-sm font-semibold text-slate-700 transition-all hover:bg-slate-100 cursor-pointer "
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right 3D Illustration */}
          <div className="flex justify-center lg:col-span-5 lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-none">

              {/* Background Glow */}
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-linear-to-r from-pink-500/20 to-purple-500/20 blur-2xl"></div>

              {/* Image */}
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
