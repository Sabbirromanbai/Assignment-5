import type { ITechnology } from "../type";

interface IYourStackProps {
  selectedItems: ITechnology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

export function YourStack({
  selectedItems,
  onRemove,
  onRemoveAll,
}: IYourStackProps) {
  return (
    <div className="w-full rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
      {/* Header */}
      <h3 className="text-lg font-bold text-slate-900">Your Stack</h3>

      <p className="mt-1 text-xs text-slate-400">
        {selectedItems.length > 0
          ? `${selectedItems.length} Technology Selected`
          : "No Technology Selected Yet"}
      </p>

      {/* Selected Items */}
      <div className="mt-4 space-y-3">
        {selectedItems.length === 0 ? (
          <p className=" border-[2px-dot] py-6 text-center text-xs text-slate-400">
            Your stack is empty.
          </p>
        ) : (
          selectedItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between rounded-xl border border-slate-100 p-3"
            >
              {/* Technology Info */}
              <div className="flex items-center gap-3">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="h-6 w-6 object-contain"
                />

                <span className="text-sm font-semibold text-slate-800">
                  {item.title}
                </span>
              </div>

              {/* Remove Button */}
              <button
                type="button"
                onClick={() => onRemove(item.id)}
                className="cursor-pointer text-slate-400 transition-colors hover:text-slate-600"
              >
                ✕
              </button>
            </div>
          ))
        )}
      </div>

      {/* Remove All Button */}
      {selectedItems.length > 0 && (
        <button
          type="button"
          onClick={onRemoveAll}
          className="mt-6 w-full cursor-pointer rounded-xl border border-rose-200 py-2.5 text-xs font-medium text-rose-500 transition-colors hover:bg-rose-50"
        >
          Remove All
        </button>
      )}
    </div>
  );
}
