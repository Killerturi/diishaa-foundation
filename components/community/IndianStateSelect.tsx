"use client";

import { useEffect, useRef, useState } from "react";

interface IndianStateSelectProps {
  value: string;
  onChange: (value: string) => void;
  error?: boolean;
}

const states = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

const unionTerritories = [
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Jammu and Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Puducherry",
];

export default function IndianStateSelect({
  value,
  onChange,
  error = false,
}: IndianStateSelectProps) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const wrapperRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  /* =========================================
     CLOSE WHEN CLICKING OUTSIDE
  ========================================== */

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
        setSearch("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  /* =========================================
     FOCUS SEARCH WHEN OPEN
  ========================================== */

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        searchRef.current?.focus();
      }, 50);
    }
  }, [open]);

  /* =========================================
     FILTER
  ========================================== */

  const filteredStates = states.filter((state) =>
    state.toLowerCase().includes(search.toLowerCase()),
  );

  const filteredUTs = unionTerritories.filter((ut) =>
    ut.toLowerCase().includes(search.toLowerCase()),
  );

  const handleSelect = (item: string) => {
    onChange(item);
    setOpen(false);
    setSearch("");
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
          "text-left text-sm",
          "transition-all duration-200",
          "outline-none",
          error
            ? "border-red-300"
            : open
              ? "border-[#0B3D91] ring-4 ring-[#0B3D91]/10"
              : "border-slate-200 hover:border-slate-300",
        ].join(" ")}
      >
        <div className="flex min-w-0 items-center gap-3">
          {/* LOCATION ICON */}
          <span
            className={[
              "flex h-7 w-7 shrink-0 items-center justify-center",
              "rounded-lg",
              value
                ? "bg-[#138808]/10 text-[#138808]"
                : "bg-[#FF9933]/10 text-[#FF9933]",
            ].join(" ")}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-4 w-4"
            >
              <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>
          </span>

          <span
            className={
              value ? "truncate font-medium text-slate-800" : "text-slate-400"
            }
          >
            {value || "Select state / union territory"}
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
        >
          {/* TOP TRICOLOR ACCENT */}

          <div className="flex h-1">
            <div className="w-1/3 bg-[#FF9933]" />
            <div className="w-1/3 bg-[#0B3D91]" />
            <div className="w-1/3 bg-[#138808]" />
          </div>

          {/* SEARCH */}

          <div className="border-b border-slate-100 bg-slate-50 p-3">
            <div className="relative">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-4-4" />
              </svg>

              <input
                ref={searchRef}
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search your state..."
                className="
                  h-10
                  w-full
                  rounded-lg
                  border
                  border-slate-200
                  bg-white
                  pl-9
                  pr-3
                  text-sm
                  text-slate-800
                  outline-none
                  placeholder:text-slate-400
                  focus:border-[#0B3D91]
                  focus:ring-2
                  focus:ring-[#0B3D91]/10
                "
              />
            </div>
          </div>

          {/* OPTIONS */}

          <div role="listbox" className="max-h-72 overflow-y-auto p-2">
            {/* STATES */}

            {filteredStates.length > 0 && (
              <>
                <div className="px-3 pb-2 pt-1">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#FF9933]" />

                    <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                      States
                    </span>
                  </div>
                </div>

                {filteredStates.map((state) => (
                  <StateOption
                    key={state}
                    name={state}
                    selected={value === state}
                    onSelect={() => handleSelect(state)}
                  />
                ))}
              </>
            )}

            {/* UNION TERRITORIES */}

            {filteredUTs.length > 0 && (
              <>
                <div className="mt-3 border-t border-slate-100 px-3 pb-2 pt-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#138808]" />

                    <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                      Union Territories
                    </span>
                  </div>
                </div>

                {filteredUTs.map((ut) => (
                  <StateOption
                    key={ut}
                    name={ut}
                    selected={value === ut}
                    onSelect={() => handleSelect(ut)}
                  />
                ))}
              </>
            )}

            {/* NO RESULT */}

            {filteredStates.length === 0 && filteredUTs.length === 0 && (
              <div className="px-4 py-8 text-center">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-slate-100">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-5 w-5 text-slate-400"
                  >
                    <circle cx="11" cy="11" r="7" />
                    <path d="m20 20-4-4" />
                  </svg>
                </div>

                <p className="mt-3 text-sm font-semibold text-slate-700">
                  No state found
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  Try another search.
                </p>
              </div>
            )}
          </div>

          {/* FOOTER */}

          <div className="border-t border-slate-100 bg-slate-50 px-3 py-2">
            <p className="text-center text-[10px] text-slate-400">
              28 States • 8 Union Territories
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

/* =====================================================
   OPTION
===================================================== */

function StateOption({
  name,
  selected,
  onSelect,
}: {
  name: string;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      role="option"
      aria-selected={selected}
      onClick={onSelect}
      className={[
        "group flex w-full items-center justify-between",
        "rounded-xl px-3 py-2.5 text-left",
        "text-sm transition-all duration-150",
        selected
          ? "bg-[#0B3D91]/8 text-[#0B3D91]"
          : "text-slate-700 hover:bg-[#FF9933]/8 hover:text-[#0B3D91]",
      ].join(" ")}
    >
      <span className="flex min-w-0 items-center gap-3">
        <span
          className={[
            "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg",
            "text-xs font-bold transition-colors",
            selected
              ? "bg-[#0B3D91] text-white"
              : "bg-slate-100 text-slate-400 group-hover:bg-[#FF9933]/15 group-hover:text-[#C66A00]",
          ].join(" ")}
        >
          {name.charAt(0)}
        </span>

        <span className="truncate">{name}</span>
      </span>

      {selected && (
        <span className="ml-3 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#138808] text-white">
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
}
