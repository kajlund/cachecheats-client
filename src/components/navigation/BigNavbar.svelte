<script>
  import state from '../../stores/state'

  import Logo from './Logo.svelte'
  import LoginLogout from './LoginLogout.svelte'
</script>

<nav class="navbar">
  <div class="nav-container">
    <Logo />
    <ul class="nav-links">
      <li>
        <a href="/"
          class:selected={$state.activePage === 'home'}
        >
          <i class="material-symbols-rounded">home</i>Home
        </a>
      </li>
      <li>
        <a href="/caches"
          class:selected={$state.activePage === 'caches'}
        >
          <i class="material-symbols-rounded">distance</i>Caches
        </a>
      </li>
      <li>
        <a href="/about"
          class:selected={$state.activePage === 'about'}
        >
          <i class="material-symbols-rounded">info</i>About
        </a>
      </li>
    </ul>
    <LoginLogout />
  </div>
</nav>

<style>
</style>