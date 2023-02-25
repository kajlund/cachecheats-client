import { writable } from 'svelte/store'

const user = writable({ username: null, loggedOn: false })

export default user
