export default function HeroOverlay() {
  return (
    <div
      className="
        absolute
        inset-y-0
        left-0
        z-10
        w-full
        lg:w-[52%]
        pointer-events-none
        bg-gradient-to-r
        from-white
        via-white
        via-20%
        via-white/50
        to-transparent
      "
    />
  );
}