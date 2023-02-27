import axios from 'axios'

import url from './URL'

const instance = axios.create({
  withCredentials: true,
  baseURL: url + '/api',
})

export default instance
