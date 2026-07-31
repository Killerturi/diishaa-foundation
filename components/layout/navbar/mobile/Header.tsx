"use client";

import { useState } from "react";
import { Menu } from "lucide-react";

import Logo from "./Logo";
import DonateButton from "./DonateButton";
import Drawer from "./Drawer";

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <header className="bg-white shadow-sm">
        <div className="flex h-[72px] items-center justify-between px-4">
          {/* Left */}

          <button
            onClick={() => setDrawerOpen(true)}
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-lg
              transition
              hover:bg-gray-100
            "
            aria-label="Open menu"
          >
            <Menu size={30} />
          </button>

          {/* Center */}

          <Logo />

          {/* Right */}

          <DonateButton />
        </div>
      </header>

      {/* Drawer */}

      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
