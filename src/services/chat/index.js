import axios from '../axios-interceptor'

function sendQuestion (question) {
  var promise = new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: `http://localhost:3000/v1/query/?question=${question}`
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
