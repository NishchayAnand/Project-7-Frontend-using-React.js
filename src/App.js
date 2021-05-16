import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import MovieDetail from "./pages/MovieDetail";

// importing from react router dom API
import { Switch, Route, useLocation } from "react-router-dom";

// importing from Framer motion API
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {/* Global style component */}
      <GlobalStyle />

      <Nav />

      <AnimatePresence exitBeforeEnter>
        {/* Here location prop is additional (can be removed) */}
        <Switch location={location} key={location.pathname}>
          {/* About Section Component/Page (default)*/}
          <Route path="/" exact>
            <AboutUs />
          </Route>

          {/* Our Work Section Component/Page */}
          <Route path="/work" exact>
            <OurWork />
          </Route>

          {/* Movie Detail Page - component */}
          <Route path="/work/:id">
            <MovieDetail />
          </Route>

          {/* Contact Us Section Component/Page */}
          <Route path="/contact">
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
