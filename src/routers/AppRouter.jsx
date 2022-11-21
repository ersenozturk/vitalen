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
          <div className="wrapperInner">
            <div className="wrapper">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/detail/:id/:type" element={<Detail />} />
              </Routes>
            </div>
          </div>
        </div>
        <div id="wrapperOutFooter">
          <div className="wrapperInner">
            <div className="wrapper">
              <Footer />
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
