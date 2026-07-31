"use client";

import DesktopImpact from "./DesktopImpact";
import MobileImpact from "./MobileImpact";

export default function ImpactSection() {
  return (
    <>
      {/* Desktop */}
      <div className="hidden lg:block">
        <DesktopImpact />
      </div>

      {/* Mobile */}
      <div className="lg:hidden">
        <MobileImpact />
      </div>
    </>
  );
}
