import { writable } from 'svelte/store'

const CLEAN_STATE = {
  showLogon: false,
  sidebar: false,
  activePage: 'home'
}

const stateStore = writable(CLEAN_STATE)

const store = {
  subscribe: stateStore.subscribe,
  toggleItem: (item, value) => {
    stateStore.update(values => {
      return { ...values, [item]: value }
    })
  },
  toggleSidebar: () => {
    stateStore.update(values => {
      return { ...values, sidebar: !values.sidebar }
    })
  },
  setActivePage: (url) => {
    let page;
    if (url === '/') {
      page = 'home'
    } else if (url) {
      page = url.substring(1, 99)
    } else {
      page = 'home'
    }

    stateStore.update(values => {
      console.log(page)
      return { ...values, activePage: page }
    })
  }
}

export default store