import axios from "axios";
export default  () => {
  const postData = {
    // email,
    // password,
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
          history.push('/chat');
        } else {
  
        }
      })
      .catch(e=> console.log(e));


};
