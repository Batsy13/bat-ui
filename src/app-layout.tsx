import { Header } from "./components/header";
import { Outlet } from "react-router";

function AppLayout() {
    return (
        <div className="h-dvh overflow-hidden bg-background">
            <Header />
            <Outlet />
        </div>
    );
}

export default AppLayout;
