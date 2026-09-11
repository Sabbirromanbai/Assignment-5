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
    <div className="w-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      {/* Header */}
      
      <div className="flex items-center justify-between border-b border-slate-100 pb-4">
        <h3 className="text-lg font-bold text-slate-900">Your Stack</h3>
        <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-semibold text-pink-600">
          {selectedItems.length} Selected
        </span>
      </div>

      {/* Stack Items / Empty State */}

      <div className="mt-4 space-y-3">
        {selectedItems.length === 0 ? (

          <div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-200 bg-slate-50/50 py-10 px-4 text-center">
            <p className="text-sm font-semibold text-slate-500">
              Your stack is empty
            </p>
          </div>
        ) : (
          selectedItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50/50 p-3 transition-all hover:border-slate-200"
            >
              <div className="flex items-center gap-3">
                <img
                  src={item.icon}
                  alt={item.name}
                  className="h-7 w-7 object-contain"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-800">
                    {item.name}
                  </h4>
                  <span className="text-[10px] font-medium text-slate-400">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Single Item Remove Button */}

              <button
                type="button"
                onClick={() => onRemove(item.id)}
                className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg text-slate-400 hover:bg-rose-50 hover:text-rose-500 transition-colors"
                title="Remove item"
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
          className="mt-6 w-full cursor-pointer rounded-xl border border-rose-200 bg-rose-50/30 py-2.5 text-xs font-semibold text-rose-600 transition-all hover:bg-rose-50 hover:border-rose-300"
        >
          Remove All
        </button>
      )}
    </div>
  );
}
