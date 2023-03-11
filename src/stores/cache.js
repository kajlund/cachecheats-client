import { writable, get } from 'svelte/store';

const cacheData = writable([]);
const cacheStore = {
  subscribe: cacheData.subscribe,
  clear: () => {
    cacheData.set([])
  },
  addItems: (payload) => {
    cacheData.update(data => {
      data = [...data, ...payload]
      return data;
    })
  },
  getCacheById: (id) => {
    const data = get(cacheData)
    return data.find(item => item.id === id)
  }
}

export default cacheStore
