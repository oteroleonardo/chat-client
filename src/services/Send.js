import axios from "axios";
export default  (receiver, message) => {
  const postData = {
    receiver,
    message
  };
  const axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "http://localhost:3000, http://localhost:3001",
    }
  };
  axios.defaults.headers.post['Access-Control-Allow-Origin'] = 'http://localhost:3000';
    axios.post('http://localhost:3000/api/v1.0/message', postData, axiosConfig)
      .then((result) => {
        console.log('Response from API: ', result);
        ////this.setState({ users: users }))
        // expected response:  {status: 'Ok', results}
        if(result && result.data && result.data.status === 'Ok') {

          console.log('Message succesfully sent result: ', result.data.result);
        } else {
  
        }
      })
      .catch(e=> console.log(e));


};
