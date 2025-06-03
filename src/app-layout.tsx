import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Outlet } from "react-router";

function AppLayout() {
  return (
    <div className="min-h-dvh bg-[#0A0A0A]">
      <Header />
        <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
