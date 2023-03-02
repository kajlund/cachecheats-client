import { writable } from 'svelte/store'

const EMPTY_STORE = {
  token: null,
  user: {
    createdAt: null,
    email: null,
    id: null,
    role: null,
    updatedAt: null,
    username: null,
  }
}

const userStore = writable(getStoredUser())

function getStoredUser() {
  const data = JSON.parse(localStorage.getItem('cheatsuser'))
  console.log('Read stored user: ', data)
  return data ? data : EMPTY_STORE
}

export function loginUser(data) {
  userStore.set(data)
  localStorage.setItem('cheatsuser', JSON.stringify(data))
}

export function logoutUser() {
  localStorage.clear();
  userStore.set(EMPTY_STORE);
}

export default userStore
