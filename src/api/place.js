import request from './request'

export const getAllPlaces = async () => {
  const result =  await request.get(`/places?limit=500`)
  return result.data.data
}

