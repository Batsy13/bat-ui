import "./index.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import AppLayout from "./app-layout";
import { Home } from "./pages/home";
import { DocsLayout } from "./components/docs-layout";
import { DocsHome } from "./components/docs-home";
import { Page404 } from "./pages/404-not-found";
import { ComponentPage } from "./pages/component-page";
import { TestPage } from "./pages/test-page";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="docs" element={<DocsLayout />}>
          <Route index element={<DocsHome />}></Route>
          <Route path="components">
            <Route path=":componentName" element={<ComponentPage />} />
          </Route>
          <Route path="test" element={<TestPage />}/>
        </Route>
      </Route>
      <Route path="*" element={<Page404 />}/>
    </Routes>
  </BrowserRouter>
);
