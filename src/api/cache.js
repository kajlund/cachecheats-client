import request from './request'

export const queryCaches = async (limit = 50, page = 1) => {
  const result =  await request.get(`/caches?${limit}&${page}`)
  return result.data.data
}

export const getCacheById = async (id) => {
  const result =  await request.get(`/caches/${id}`)
  return result.data.data.cache
}
