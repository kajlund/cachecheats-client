import request from './request'

export const login = async (email, password) => {
  const result = await request.post('/login', {
    email,
    password,
  })
  return result.data
}


