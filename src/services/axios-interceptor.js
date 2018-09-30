import axios from 'axios'

axios.interceptors.request.use((config) => {
  config.headers['content-type'] = 'application/json'
  return config
}, (err) => {
  return Promise.reject(err)
})
axios.interceptors.response.use((config) => {
  return config
},
error => {
  return Promise.reject(error)
})

export default axios
