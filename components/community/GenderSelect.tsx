"use client";

import { useEffect, useRef, useState } from "react";

interface GenderSelectProps {
  value: string;
  onChange: (value: string) => void;
}

const genderOptions = [
  {
    value: "male",
    label: "Male",
    icon: "male",
  },
  {
    value: "female",
    label: "Female",
    icon: "female",
  },
  {
    value: "other",
    label: "Other",
    icon: "other",
  },
  {
    value: "prefer-not-to-say",
    label: "Prefer not to say",
    icon: "private",
  },
];

export default function GenderSelect({ value, onChange }: GenderSelectProps) {
  const [open, setOpen] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);

  const selectedOption = genderOptions.find((option) => option.value === value);

  /* =========================================
     CLOSE ON OUTSIDE CLICK
  ========================================== */

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  /* =========================================
     SELECT
  ========================================== */

  const handleSelect = (gender: string) => {
    onChange(gender);
    setOpen(false);
  };

  return (
    <div ref={wrapperRef} className="relative w-full">
      {/* =====================================
          SELECT BUTTON
      ====================================== */}

      <button
        type="button"
        onClick={() => setOpen((previous) => !previous)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={[
          "flex h-12 w-full items-center justify-between",
          "rounded-xl border bg-white px-4",
          "text-left text-sm outline-none",
          "transition-all duration-200",
          open
            ? "border-[#0B3D91] ring-4 ring-[#0B3D91]/10"
            : "border-slate-200 hover:border-slate-300",
        ].join(" ")}
      >
        <div className="flex min-w-0 items-center gap-3">
          {/* ICON */}

          <span
            className={[
              "flex h-7 w-7 shrink-0 items-center justify-center",
              "rounded-lg",
              selectedOption
                ? "bg-[#0B3D91]/10 text-[#0B3D91]"
                : "bg-[#FF9933]/10 text-[#FF9933]",
            ].join(" ")}
          >
            <GenderIcon type={selectedOption?.icon || "other"} />
          </span>

          {/* VALUE */}

          <span
            className={
              selectedOption ? "font-medium text-slate-800" : "text-slate-400"
            }
          >
            {selectedOption?.label || "Select gender"}
          </span>
        </div>

        {/* ARROW */}

        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={[
            "h-4 w-4 shrink-0 text-slate-400",
            "transition-transform duration-200",
            open ? "rotate-180 text-[#0B3D91]" : "",
          ].join(" ")}
        >
          <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* =====================================
          DROPDOWN
      ====================================== */}

      {open && (
        <div
          className="
            absolute
            left-0
            right-0
            z-50
            mt-2
            overflow-hidden
            rounded-2xl
            border
            border-slate-200
            bg-white
            shadow-2xl
          "
          role="listbox"
        >
          {/* TRICOLOR ACCENT */}

          <div className="flex h-1">
            <div className="w-1/3 bg-[#FF9933]" />
            <div className="w-1/3 bg-[#0B3D91]" />
            <div className="w-1/3 bg-[#138808]" />
          </div>

          {/* HEADER */}

          <div className="border-b border-slate-100 bg-slate-50 px-4 py-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
              Select your gender
            </p>
          </div>

          {/* OPTIONS */}

          <div className="p-2">
            {genderOptions.map((option) => {
              const selected = value === option.value;

              return (
                <button
                  key={option.value}
                  type="button"
                  role="option"
                  aria-selected={selected}
                  onClick={() => handleSelect(option.value)}
                  className={[
                    "group flex w-full items-center",
                    "justify-between rounded-xl px-3 py-3",
                    "text-left transition-all duration-150",
                    selected
                      ? "bg-[#0B3D91]/8 text-[#0B3D91]"
                      : "text-slate-700 hover:bg-[#FF9933]/8 hover:text-[#0B3D91]",
                  ].join(" ")}
                >
                  <span className="flex items-center gap-3">
                    {/* OPTION ICON */}

                    <span
                      className={[
                        "flex h-9 w-9 items-center",
                        "justify-center rounded-xl",
                        "transition-colors",
                        selected
                          ? "bg-[#0B3D91] text-white"
                          : "bg-slate-100 text-slate-400 group-hover:bg-[#FF9933]/15 group-hover:text-[#C66A00]",
                      ].join(" ")}
                    >
                      <GenderIcon type={option.icon} />
                    </span>

                    {/* LABEL */}

                    <span className="text-sm font-medium">{option.label}</span>
                  </span>

                  {/* CHECK */}

                  {selected && (
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#138808] text-white">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        className="h-3 w-3"
                      >
                        <path
                          d="m5 12 4 4L19 6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* FOOTER */}

          <div className="border-t border-slate-100 bg-slate-50 px-4 py-2.5">
            <p className="text-center text-[10px] text-slate-400">
              Your information is kept private.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

/* =====================================================
   GENDER ICON
===================================================== */

function GenderIcon({ type }: { type: string }) {
  if (type === "male") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-4 w-4"
      >
        <circle cx="10" cy="14" r="5" />

        <path
          d="m14 10 5-5M15 5h4v4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "female") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-4 w-4"
      >
        <circle cx="12" cy="9" r="5" />

        <path
          d="M12 14v6M9 18h6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "private") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-4 w-4"
      >
        <rect x="5" y="10" width="14" height="10" rx="2" />

        <path d="M8 10V7a4 4 0 0 1 8 0v3" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-4 w-4"
    >
      <circle cx="12" cy="8" r="3" />

      <path d="M5 20c.7-3.3 3-5 7-5s6.3 1.7 7 5" strokeLinecap="round" />
    </svg>
  );
}
