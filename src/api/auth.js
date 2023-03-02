import request from './request'
import { loginUser, logoutUser } from '../stores/user'

export const login = async (email, password) => {
  const result = await request.post('/login', {
    email,
    password,
  })
  const data = {
    token: result.data.token,
    user: result.data.user,
  }
  request.defaults.headers.common['Authorization'] = `Bearer ${result.data.token}`
  loginUser(data)
}

export const logout = async () => {
  // need to implement invalidation of tokens on server
  request.defaults.headers.common['Authorization'] = null
  logoutUser()
}

export const checkSession = async (token) => {
  return request.get('/auth', {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`
    }
  })
}
