import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <HashRouter>
      <div className="relative z-0 bg-primary">
        <div className="">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
      <div>
        <Routes>
          <Route
            exact
            path="/"
            component={Hero}
          />
          <Route
            path="/about"
            component={About}
          />
          <Route
            path="/work"
            component={Experience}
          />
          <Route
            path="/project"
            component={Works}
          />
          <Route
            path="/testimonial"
            component={Feedbacks}
          />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;
