import { AnimatePresence } from "framer-motion";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Nav } from "../component/Nav";
import About from "../screen/About";
import Contact from "../screen/Contact";
import Home from "../screen/Home";
import News from "../screen/News";
import Portfolio from "../screen/Portfolio";

const RouterNav = ({ children }) => {
  return <Nav>{children}</Nav>;
};

export const AppRouter = () => {
  return (
    <Router>
      <AnimatePresence>
        <Routes>
          <Route
            path="/"
            element={
              <RouterNav>
                <Home />
              </RouterNav>
            }
          />
          <Route
            path="/About"
            element={
              <RouterNav>
                <About />
              </RouterNav>
            }
          />
          <Route
            path="/Portfolio"
            element={
              <RouterNav>
                <Portfolio />
              </RouterNav>
            }
          />
          <Route
            path="/News"
            element={
              <RouterNav>
                <News />
              </RouterNav>
            }
          />
          <Route
            path="/Contact"
            element={
              <RouterNav>
                <Contact />
              </RouterNav>
            }
          />
        </Routes>
      </AnimatePresence>
    </Router>
  );
};
