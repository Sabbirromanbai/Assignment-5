import type { ITechnology } from "../type";
import { YourStack } from "./yourStack";

interface SkillProps {
  technologies: ITechnology[];
  selectedItems: ITechnology[];
  onAddToStack: (tech: ITechnology) => void;
  onRemoveFromStack: (id: string) => void;
  onRemoveAll: () => void;
  loading: boolean;
}

export function Skill({
  technologies,
  selectedItems,
  onAddToStack,
  onRemoveFromStack,
  onRemoveAll,
  loading,
}: SkillProps) {
  return (
    <section id="technologies" className="mx-auto max-w-7xl px-4 py-12">
      {/* Section Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold text-slate-900">
          Explore the{" "}
          <span className="bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {loading ? (
        <div className="flex h-64 items-center justify-center">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-pink-500 border-t-transparent"></div>
          <span className="ml-3 text-sm font-semibold text-slate-600">
            Loading Technologies...
          </span>
        </div>
      ) : (
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          
          {/* Card Grid */}

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
            {technologies.map((tech) => {
              const isAdded = selectedItems.some((item) => item.id === tech.id);

              return (
                <div
                  key={tech.id}
                  className={`flex flex-col justify-between rounded-2xl border bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
                    isAdded ? "border-pink-300 ring-1 ring-pink-300" : "border-slate-100"
                  }`}
                >
                  <div>
                    {/* Icon & Badge */}

                    <div className="flex items-start justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 p-2">
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className="h-full w-full object-contain"
                        />
                      </div>

                      {tech.badge && (
                        <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-medium text-slate-600">
                          {tech.badge}
                        </span>
                      )}
                    </div>

                    {/* Title & Description */}
                    <h3 className="mt-3 text-base font-bold text-slate-900">
                      {tech.name}
                    </h3>

                    <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
                      {tech.description}
                    </p>
                  </div>

                  {/* Card Bottom: Category, Difficulty & Rating */}

                  <div className="mt-5">
                    <div className="flex items-center justify-between text-[11px] text-slate-500">
                      <span>{tech.category}</span>
                      <span>{tech.difficulty}</span>
                      <div className="flex items-center gap-1 font-semibold text-slate-700">
                        <span className="text-amber-400">★</span>
                        <span>{tech.rating.toFixed(1)}</span>
                      </div>
                    </div>

                    {/* Add to Stack Button */}

                    <button
                      type="button"
                      onClick={() => onAddToStack(tech)}
                      disabled={isAdded}
                      className={`mt-3 w-full rounded-xl py-2 text-xs font-semibold transition-all ${
                        isAdded
                          ? "cursor-not-allowed bg-emerald-50 text-red-600 border border-emerald-200"
                          : "cursor-pointer bg-slate-900 text-white hover:bg-slate-800"
                      }`}
                    >
                      {isAdded ? "✓ Added to Stack" : "Add to Stack"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Sidebar: Your Stack */}

          <div className="w-full lg:col-span-4">
            <div className="sticky top-20">
              <YourStack
                selectedItems={selectedItems}
                onRemove={onRemoveFromStack}
                onRemoveAll={onRemoveAll}
              />
            </div>
          </div>

        </div>
      )}
    </section>
  );
}