"use client";

import quickActionsData from "./quickActionsData";
import QuickActionItem from "./QuickActionItem";

export default function QuickActions() {
  return (
    <section
      className="
    absolute
    left-0
    right-0
    top-[8px]
    z-40
    px-3
  "
    >
      <div
        className="
          overflow-hidden
          rounded-[24px]
          bg-white
          shadow-[0_10px_30px_rgba(0,0,0,.12)]
          ring-1
          ring-[#EFE7DA]
        "
      >
        <div className="grid grid-cols-4">
          {quickActionsData.map((item, index) => (
            <div
              key={item.title}
              className={`
                ${
                  index !== quickActionsData.length - 1
                    ? "border-r border-[#ECECEC]"
                    : ""
                }
              `}
            >
              <QuickActionItem {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
