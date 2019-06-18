import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header"
import Login from "./components/Login"
import Chat from "./components/Chat"
function App() {
  return (
    <Router>
      <div style={{ width: '100%', maxWidth: '100%', margin: 0, padding: 0 }}>
        <Header style={{ width: '100%', maxWidth: '100%', margin: 0, padding: 0 }} />
        <Route exact path="/" component={Login} />
        <Route path="/Login" component={Login} />
        <Route path="/about" component={About} />
        <Route path="/chat" component={Chat} />
      </div>
    </Router>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
      <p>Chat Client V1.0</p>
    </div>
  );
}

export default App;
