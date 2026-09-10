import { useEffect, useState } from "react";
import type { ITechnology } from "../type";
import { YourStack } from "./yourStack";

export function Skill({
  TechnologyPromise,
}: {
  TechnologyPromise: Promise<ITechnology[]>;
}) {
  const [technologies, setTechnologies] = useState<ITechnology[]>([]);
  const [selectedItems, setSelectedItems] = useState<ITechnology[]>([]);

  // Add technology to stack
  const addToStack = (technology: ITechnology) => {
    setSelectedItems((items) =>
      items.some((item) => item.id === technology.id)
        ? items
        : [...items, technology],
    );
  };

  // Get technologies
  useEffect(() => {
    let isMounted = true;

    TechnologyPromise.then((data) => {
      if (isMounted) {
        setTechnologies(data);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [TechnologyPromise]);

  // Remove single technology
  const removeFromStack = (id: string) => {
    setSelectedItems((items) =>
      items.filter((technology) => technology.id !== id),
    );
  };

  // Remove all technologies
  const removeAll = () => {
    setSelectedItems([]);
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      {/* Section Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold text-slate-900">
          Explore the{" "}
          <span className="bg-linear-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Technology Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
          {technologies.map((T) => (
            <div
              key={T.id}
              className="group flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div>
                {/* Icon & Badge */}
                <div className="flex items-start justify-between">
                  {/* Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 p-2">
                    <img
                      src={T.icon}
                      alt={T.title}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  {/* Badge */}
                  {T.badge && (
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        T.badge === "Popular"
                          ? "bg-blue-50 text-blue-400"
                          : T.badge === "Ubiquitous"
                            ? "bg-blue-50 text-[#D97706]"
                            : T.badge === "Fast"
                              ? "bg-orange-50 text-orange-500"
                              : T.badge === "Standard"
                                ? "bg-green-50 text-green-500"
                                : T.badge === "Cache"
                                  ? "bg-red-50 text-red-500"
                                  : T.badge === "Modern"
                                    ? "bg-teal-50 text-teal-500"
                                    : T.badge === "Versatile"
                                      ? "bg-purple-50 text-[#059669]"
                                      : "bg-slate-50 text-slate-500"
                      }`}
                    >
                      {T.badge}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="mt-4 text-xl font-bold text-slate-900">
                  {T.title}
                </h3>

                {/* Description */}
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-500">
                  {T.description}
                </p>
              </div>

              {/* Card Footer */}
              <div className="mt-6">
                {/* Category, Level & Rating */}
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <span>{T.category}</span>
                    <span>•</span>
                    <span>{T.level}</span>
                  </div>

                  <div className="flex items-center gap-1 font-semibold text-slate-700">
                    <span className="text-amber-400">★</span>
                    <span>{T.rating.toFixed(1)}</span>
                  </div>
                </div>

                {/* Add Button */}
                <button
                  type="button"
                  onClick={() => addToStack(T)}
                  className="mt-4 w-full cursor-pointer rounded-xl bg-slate-900 py-3 text-xs font-semibold text-white transition-colors hover:bg-slate-800"
                >
                 Add to Stack
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Your Stack - Right Side */}
        <div className="lg:col-span-4">
          <div className="sticky top-6">
            <YourStack
              selectedItems={selectedItems}
              onRemove={removeFromStack}
              onRemoveAll={removeAll}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
