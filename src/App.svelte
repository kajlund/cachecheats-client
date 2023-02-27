<script>
  import router from 'page'
  import routes from './lib/routes.js';
  import state from './stores/state'

  import Logon from './components/Logon.svelte'
  import Navbar from './components/navigation/Navbar.svelte';
  import Sidebar from './components/navigation/Sidebar.svelte'

  let page;
  let params;
  let user = null;

  routes.forEach(route => {
    router(
      route.path,
      (ctx, next) => {
        params = ctx.params;
        next();
      },
      () => {
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
