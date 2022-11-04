import axios from 'axios'

/*
 * apiClient - single axios instance for our app
 * baseUrl - base URL for all calls to use
 * Content-Type - for authentication & configuration
 */
const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/ailamimi/Real-World_Vue-3',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents() {
    return apiClient.get('/events')
  },

  getEvent(id) {
    return apiClient.get('/events/' + id)
  }
}
