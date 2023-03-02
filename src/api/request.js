import axios from 'axios'

import url from './URL'

const instance = axios.create({
  baseURL: url + '/api',
})

export default instance
