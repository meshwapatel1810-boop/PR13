import {
  HashRouter,
  MemoryRouter,
  Routes,
  Route,
} from "react-router-dom";

import { StaticRouter } from "react-router";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import RouterCard from "./components/RouterCard";
import "./App.css";

function Pages() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <div className="app">
      <h1>🚀 React Router Demo</h1>
      <p className="subtitle">
        Explore three types of React routers
      </p>

      <RouterCard
        title="1. HashRouter"
        description="Navigation changes the URL hash."
      >
        <HashRouter>
          <Pages />
        </HashRouter>
      </RouterCard>

      <RouterCard
        title="2. MemoryRouter"
        description="Navigation is stored in memory."
      >
        <MemoryRouter>
          <Pages />
        </MemoryRouter>
      </RouterCard>

      <RouterCard
        title="3. StaticRouter"
        description="Renders a fixed route for server rendering."
      >
        <StaticRouter location="/about">
          <Pages />
        </StaticRouter>
      </RouterCard>
    </div>
  );
}

export default App;