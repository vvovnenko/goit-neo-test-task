import "./App.css";
import AppLayout from "./components/AppLayout/AppLayout.jsx";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader/Loader.jsx";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./pages/Home/Home.jsx"));
const Catalog = lazy(() => import("./pages/Catalog/Catalog.jsx"));
const Truck = lazy(() => import("./pages/Truck/Truck.jsx"));

function App() {
  return (
    <AppLayout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:id" element={<Truck />} />
        </Routes>
      </Suspense>
    </AppLayout>
  );
}

export default App;
