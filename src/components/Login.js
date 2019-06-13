import {saveUserToken} from "../utils/helper";
import React, {Component } from "react";
import axios from "axios";
import {
  FormControl,
  InputLabel,
  Input,
  Button,
} from "@material-ui/core";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      emailValid: false,
    };
    //this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event){
    //event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event){
    event.preventDefault();
    const postData = {
      email: this.state.email,
      password: this.state.password,
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
          this.props.history.push('/chat');
        } else {

        }
      })
      .catch(e=> console.log(e));

  }


  validateForm(){
    this.setState({formValid: this.state.emailValid && this.state.passwordValid});
  }   

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: 20,
          padding: 20
        }}
      >
        <form style={{ width: "50%" }} onSubmit={(event) => this.handleSubmit(event)}>
          <h1>Login</h1>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input id="email" name="email" type="email" value={this.state.email} onChange={(event) => this.handleInputChange(event)}/>
          </FormControl>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input id="password" name="password" type="password"  value={this.state.password} onChange={(event) => this.handleInputChange(event)}/>
          </FormControl>

          <Button type="submit" variant="contained" color="primary" size="medium">
            Send
          </Button>
        </form>
      </div>
    );
  }
};

export default Login
