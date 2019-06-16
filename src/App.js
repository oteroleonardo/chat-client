import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header"
import Login from "./components/Login"
import Chat2 from "./components/Chat2"
function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Route exact path="/" component={Login} />
        <Route path="/about" component={About} />
        <Route path="/chat" component={Chat2} />
      </div>
    </Router>
  );
}

function About() {
  return <h2>About</h2>;
}

function Topic({ match }) {
  return <h3>Requested Param: {match.params.id}</h3>;
}

export default App;
