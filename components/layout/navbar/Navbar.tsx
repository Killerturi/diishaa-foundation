import TopBar from "./desktop/TopBar";
import MainNavbar from "./desktop/MainNavbar";
import Header from "./mobile/Header";
import QuickActions from "./mobile/QuickActions";

export default function Navbar() {
  return (
    <>
      {/* Desktop */}
      <div className="hidden lg:block">
        <TopBar />
        <MainNavbar />
      </div>

      {/* Mobile */}
      <div className="lg:hidden">
        <Header />
        <QuickActions />
      </div>
    </>
  );
}
