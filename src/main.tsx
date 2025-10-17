import "./index.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import AppLayout from "./app-layout";
import { Home } from "./pages/home";
import { DocsLayout } from "./pages/docs-layout";
import { DocsHome } from "./pages/docs-home";
import { Page404 } from "./pages/404-not-found";
import { ComponentPage } from "./pages/component-page";
import { TestPage } from "./pages/test-page";
import { ComponentHome } from "./pages/component-home";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="docs" element={<DocsLayout />}>
          <Route index element={<DocsHome />}></Route>
          <Route path="components" element={<ComponentHome />}></Route>
          <Route path="components/:componentName" element={<ComponentPage />} />
          <Route path="test" element={<TestPage />}/>
        </Route>
      </Route>
      <Route path="*" element={<Page404 />}/>
    </Routes>
  </BrowserRouter>
);
