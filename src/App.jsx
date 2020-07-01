import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  const day =
    (Date.now() - new Date("June 30, 2020 22:26:00")) /
    (24 * 60 * 60 * 1000);

  return (
    <Router>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
      </Switch>

      <div className="day">
        <p>Day</p>
        <h4>{day.toFixed()}</h4>
      </div>
    </Router>
  );
}

export default App;
