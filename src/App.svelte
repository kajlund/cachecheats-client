<script>
  import { onMount } from 'svelte'
  import router from 'page'

  import routes from './lib/routes.js'
  import state from './stores/state'
  import userStore from './stores/user'
  import { checkSession } from './api/auth'
  import notyf from './lib/notyf'
  import Logon from './components/Logon.svelte'
  import Navbar from './components/navigation/Navbar.svelte'
  import Sidebar from './components/navigation/Sidebar.svelte'

  let page;
  let params;
  let user = null;
  const options = {};

  $: token = $userStore.token;

  routes.forEach(route => {
    router(
      route.path,
      (ctx, next) => {
        params = ctx.params;
        next();
      },
      () => {
        // console.log('route: ', route)
        state.setActivePage(route.path)
        if (route.auth && !user) {
          // router.redirect("/login");
        } else {
          page = route.component;
        }
      }
    );
  });

  // Start the router
  router.start();

  onMount(async () => {
    console.log('Mounting App')
    console.log('Token=', token)
    if (token) {
      try {
        const result = await checkSession(token)
        console.log('state = ', $state)
        const username = $userStore.user.username
        notyf.success(`Session restored. Welcome ${username}!`)
      } catch (error) {
        console.log(error)
        notyf.error(error.message)
        state.toggleItem('showLogon', true)
      }
    } else {
      state.toggleItem('showLogon', true)
    }
  })
</script>

{#if $state.showLogon}
  <Logon />
{/if}

<Navbar />
{#if $state.sidebar}
  <Sidebar />
{/if}
<main>
  <svelte:component this={page} params={params} />
</main>

<style>
</style>
