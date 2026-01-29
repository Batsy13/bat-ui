import { Header } from "./components/header";
import { Outlet } from "react-router";

function AppLayout() {
    return (
        <div className="min-h-dvh bg-background">
            <Header />
            <Outlet />
        </div>
    );
}

export default AppLayout;
