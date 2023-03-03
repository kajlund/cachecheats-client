<script>
  import state from '../../stores/state'

  import Burger from './Burger.svelte'
  import NavbarAside from './NavbarAside.svelte'
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
    <NavbarAside />
  </div>
</nav>
