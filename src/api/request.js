import axios from 'axios'
import { get } from 'svelte/store'

import url from './URL'
import userStore from '../stores/user'

const instance = axios.create({
  baseURL: url + '/api',
  headers: {
    'Content-Type': 'application/json',
  }
})

instance.interceptors.request.use(function (config) {
  const session = get(userStore)
  config.headers.Authorization =  session.token ? `Bearer ${session.token}` : '';

  return config;
});

export default instance
