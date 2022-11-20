import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Home from "../pages/home/Home";
import Detail from "../pages/detail/Detail";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <div id="wrapperOut">
          <div class="wrapperInner">
            <div class="wrapper">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/detail/:id" element={<Detail />} />
              </Routes>
            </div>
          </div>
        </div>
        <div id="wrapperOutFooter">
          <div class="wrapperInner">
            <div class="wrapper">
              <Footer />
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
