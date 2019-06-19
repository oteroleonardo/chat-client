import React, {useState} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header"
import Login from "./components/Login"
import Chat from "./components/Chat"
import ChatContext from './context/ChatContext';
import Message from './services/Message';
function App() {
  const [chatCtx, setChatCtx] = useState({
    token: {},
    contacts: [
    ],
    messages: [
    ],
    checked: [

    ],
    send: { message: ''},
    sendMessage: (message, checked, token, cb) =>{ 
      console.log ('Message: ', message, ' Checked: ', checked, ' token: ', token);
      Message.send({
        receiver: checked.map(contact => contact.username),
        message,
        token,
        cb,
      });
    },
  });

  return (
    <Router>
      <div style={{ width: '100%', maxWidth: '100%', margin: 0, padding: 0 }}>
      <ChatContext.Provider value={{chatCtx, setChatCtx}}>
        <Header style={{ width: '100%', maxWidth: '100%', margin: 0, padding: 0 }} />
        <Route exact path="/" component={Login} />
        <Route path="/Login" component={Login} />
        <Route path="/about" component={About} />
        <Route path="/chat" component={Chat} />
      </ChatContext.Provider>
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
