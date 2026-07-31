import Logo from "./Logo";
import Navigation from "./Navigation";
import DonateButton from "./DonateButton";

export default function MainNavbar() {
  return (
    <header className="bg-white">
      <div
        className="
          mx-auto
          flex
          h-[92px]
          max-w-[1440px]
          items-center
          justify-between
          px-8
        "
      >
        {/* Left */}
        <div className="shrink-0">
          <Logo />
        </div>

        {/* Center */}
        <div className="flex flex-1 justify-center">
          <Navigation />
        </div>

        {/* Right */}
        <div className="shrink-0">
          <DonateButton />
        </div>
      </div>
    </header>
  );
}
