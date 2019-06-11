import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./components/Header"
import Login from "./components/Login"
function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Route exact path="/" component={Login} />
        <Route path="/about" component={About} />
        <Route path="/chat" component={Chat} />
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

function Chat({ match }) {
  return (
    <div>
      <h2>Chat</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:id`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

export default App;
