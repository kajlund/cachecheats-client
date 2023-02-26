<script>
  import state from '../../stores/state'

  import Burger from './Burger.svelte'
  import Logo from './Logo.svelte'
  import LoginLink from './LoginLink.svelte'
</script>

<nav class="navbar">
  <div class="nav-container">
    <Burger
      on:click={() => {
        state.toggleItem('sidebar', true)
      }}
    />
    <Logo />
    <LoginLink />
  </div>
</nav>
