"use client";

import DesktopFocus from "./DesktopFocus";
import MobileFocus from "./MobileFocus";

export default function FocusSection() {
  return (
    <>
      {/* Desktop */}
      <div className="hidden lg:block">
        <DesktopFocus />
      </div>

      {/* Mobile */}
      <div className="lg:hidden">
        <MobileFocus />
      </div>
    </>
  );
}
