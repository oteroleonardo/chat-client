import React, {useState} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header"
import Login from "./components/Login"
import Chat from "./components/Chat"
import ChatContext from './context/ChatContext';

function App() {
  const [chatCtx, setChatCtx] = useState({
    contacts: [
      { id: 1, username: 'oteroleonardo@gmail.com', status: 'connected' },
      { id: 2, username: 'carlostomada@gmail.com', status: 'disconnected' },
      { id: 3, username: 'carlosperez@gmail.com', status: 'connected' },
      { id: 5, username: 'raulssanbrano@gmail.com', status: 'disconnected' },
      { id: 6, username: 'raulssanbrano@gmail.com', status: 'connected' },
      { id: 7, username: 'raulssanbrano@gmail.com', status: 'disconnected' },
      { id: 8, username: 'raulssanbrano@gmail.com', status: 'connected' },
    ],
    messages: [
      { userId: 1, username: 'oteroleonardo@gmail.com', message: 'Hello Guys. What a wanderful day uhh... ? Would u like to go for a smoothie today noon? \n\nI just love the idea, ain\'t u?' },
      { userId: 2, username: 'carlostomada@gmail.com', message: 'What a nice day, uhh...' },
      { userId: 3, username: 'carlosperez@gmail.com', message: 'I like this chat' },
      { userId: 5, username: 'raulssanbrano@gmail.com', message: 'Hello Guys' },
      { userId: 6, username: 'raulssanbrano@gmail.com', message: 'Did you see last Marvel movie?' },
      { userId: 7, username: 'raulssanbrano@gmail.com', message: 'I hate u 3000' },
      { userId: 8, username: 'raulssanbrano@gmail.com', message: 'YOU\'RE STRONG, BUT I COULD SNAP MY FINGERS AND YOU\'D ALL CEASE TO EXIST.' },

    ],
    checked: [

    ],
    send: { message: ''},
    sendMessage: (message, checked) =>{ console.log ('Message:', message, ' Checked', checked)},
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
