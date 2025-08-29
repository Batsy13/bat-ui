import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import AppLayout from "./app-layout";
import { Home } from "./pages/home";
import { DocsLayout } from "./components/docs-layout";
import { DocsHome } from "./components/docs-home";
import AccordionPage from "./pages/components/accordion-page";
import AlertDialogPage from "./pages/components/alert-dialog-page";
import ButtonPage from "./pages/components/button-page";
import AspectRatioPage from "./pages/components/aspect-ratio-page";
import BadgePage from "./pages/components/badge-page";
import { Page404 } from "./pages/404-not-found";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="docs" element={<DocsLayout />}>
          <Route index element={<DocsHome />}></Route>
          <Route path="components">
            <Route path="accordion" element={<AccordionPage />}/>
            <Route path="alert-dialog" element={<AlertDialogPage />}/>
            <Route path="aspect-ratio" element={<AspectRatioPage />}/>
            <Route path="button" element={<ButtonPage />}/>
            <Route path="badge" element={<BadgePage />}/>
          </Route>
        </Route>
      </Route>
      <Route path="*" element={<Page404 />}/>
    </Routes>
  </BrowserRouter>
);
