import axios from '../axios-interceptor'

function sendQuestion (question) {
  var promise = new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: `https://chatbot-api-soldai.herokuapp.com/v1/query/?question=${question}`
    }).then((msg) => {
      console.log(msg)
      resolve(msg)
    }).catch((err) => {
      reject(err)
    })
  })
  return promise
}

export default {
  sendQuestion
}
