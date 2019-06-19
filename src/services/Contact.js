import axios from "axios";
export default  ({receiver, message, token}) => {
  const postData = {
    receiver,
    message
  };
  //axios.defaults.headers.post['Access-Control-Allow-Origin'] = 'http://localhost:3000';
  const axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': 'http://localhost:3000, http://localhost:3001',
        'Authorization': `Bearer ${token}`,
    }
  };

    axios.post('http://localhost:3000/api/v1.0/message', postData, axiosConfig)
      .then((result) => {
        console.log('Response from API: ', result);
        ////this.setState({ users: users }))
        // expected response:  {status: 'Ok', results}
        if(result && result.data && result.data.status === 'Ok') {

          console.log('Message succesfully sent result: \n', result.data.results);
        } else {
  
        }
      })
      .catch(e=> console.log(e));


};
