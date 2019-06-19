import axios from "axios";

const send = ({ receiver, message, token, cb }) => {
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
      console.log('Response from POST Message: ', result);
      if (result && result.data && result.data.status === 'Ok') {

        console.log('Message succesfully sent result: \n', result.data.results);
        cb();
      } else {

      }
    })
    .catch(e => console.log(e));


};

const receive = async(token) => {

  const axiosConfig = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': 'http://localhost:3000, http://localhost:3001',
      'Authorization': `Bearer ${token}`,
    }
  };

   const result = await axios.get('http://localhost:3000/api/v1.0/message', axiosConfig)
    .catch(e => {
      console.log(e);
      Promise.resolve({status: 'fail', error: e });
    })
    console.log('Response from GET message: ', result);

    if (result && result.data && result.data.status === 'Ok') {
      const {status,  qtty, messages} = result.data;
      console.log(`GET Message received ${status } qtty: ${qtty} messages: \n`,JSON.stringify(messages));
      return Promise.resolve({status, qtty, messages});
    } else {
      console.log('GET Message data: \n', result.data);
      Promise.resolve({status: 'fail', error: Error('Error calling GET message API service call result: '), result });
    }

};

const update = async({id, readed, token}) => {
  const patchData = {
    id,
    readed,
  };
  const axiosConfig = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': 'http://localhost:3000, http://localhost:3001',
      'Authorization': `Bearer ${token}`,
    }
  };

   const result = await axios.patch('http://localhost:3000/api/v1.0/message', patchData, axiosConfig)
    .catch(e => {
      console.log(e);
      Promise.resolve({status: 'fail', error: e });
    })
    console.log('Response from PATCH message: ', result);

    if (result && result.data && result.data.status === 'Ok') {
      const {status, message} = result.data;
      console.log(`PATCH Message received ${status } message: \n`,JSON.stringify(message));
      return Promise.resolve({status, message});
    } else {
      console.log('PATCH Message data: \n', result.data);
      Promise.resolve({status: 'fail', error: Error('Error calling PATCH message API service call result: '), result });
    }

};

export default {
  send,
  receive,
  update,
};
