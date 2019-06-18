import {saveUserToken} from "../utils/helper";
import React, {useState, useContext } from "react";
import useReactRouter from 'use-react-router';
import axios from "axios";

import ChatContext from '../context/ChatContext';

import {
  FormControl,
  InputLabel,
  Input,
  Button,
} from "@material-ui/core";

function Login() {
  const ctx = useContext(ChatContext);
  const { history} = useReactRouter();
  const [email, setEmail] = useState("");
  const [ password, setPassword ]  = useState("");

  function handleSubmit(event){
    event.preventDefault();
    const postData = {
      email,
      password,
    };

  const axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "http://localhost:3000, http://localhost:3001",
    }
  };
  axios.defaults.headers.post['Access-Control-Allow-Origin'] = 'http://localhost:3000';
    axios.post('http://localhost:3000/api/v1.0/auth/login', postData, axiosConfig)
      .then((result) => {
        console.log('Response from API: ', result);
        //this.setState({ users: users }))
        if(result && result.data && result.data.token) {
          console.log('login successful!');
          saveUserToken(result.data.token)
          ctx.setChatCtx({...ctx.chatCtx, contacts: result.data.users})
          history.push('/chat');
        } else {

        }
      })
      .catch(e=> console.log(e));

  }


  // validateForm(){
  //   this.setState({formValid: this.state.emailValid && this.state.passwordValid});
  // }   


    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: 20,
          padding: 20
        }}
      >
        <form style={{ width: "50%" }} onSubmit={(event) => handleSubmit(event)}>
          <h1>Login</h1>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input id="email" name="email" type="email" 
              value={email} 
              onChange={e => setEmail(e.target.value)} 
            />
          </FormControl>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input id="password" name="password" type="password"  
              value={password} 
              onChange={e => setPassword(e.target.value)} 
            />
          </FormControl>

          <Button type="submit" variant="contained" color="primary" size="medium">
            Send
          </Button>
        </form>
      </div>
    );
};

export default Login
