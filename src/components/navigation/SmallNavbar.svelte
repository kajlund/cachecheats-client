<script>
  import state from '../../stores/state'

  import Burger from './Burger.svelte'
  import LoginLogout from './LoginLogout.svelte'
  import Logo from './Logo.svelte'
</script>

<nav class="navbar">
  <div class="nav-container">
    <Burger
      on:click={() => {
        state.toggleItem('sidebar', true)
      }}
    />
    <Logo />
    <LoginLogout />
  </div>
</nav>
