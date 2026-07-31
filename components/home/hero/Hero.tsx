"use client";

import DesktopHero from "./DesktopHero";
import MobileHero from "./MobileHero";

export default function Hero() {
  return (
    <>
      {/* Desktop */}
      <div className="hidden lg:block">
        <DesktopHero />
      </div>

      {/* Mobile */}
      <div className="lg:hidden">
        <MobileHero />
      </div>
    </>
  );
}
