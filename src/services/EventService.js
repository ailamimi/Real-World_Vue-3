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
  /*
   * _limit -> how many items to return
   * _page -> what page we are on
   * perPage -> events to return per page
   * page -> the page we're on
   */
  getEvents(perPage, page) {
    return apiClient.get('/events?_limit=' + perPage + '&_page=' + page)
  },

  getEvent(id) {
    return apiClient.get('/events/' + id)
  }
}
