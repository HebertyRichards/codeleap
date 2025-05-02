import { BrowserRouter, Route, Routes } from "react-router-dom";

import Sign from "./pages/sign/Sign";
import Home from "./pages/home/Home";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sign />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
