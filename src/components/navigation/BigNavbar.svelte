<script>
  import state from '../../stores/state';
  import Logo from './Logo.svelte'
  import LoginLink from './LoginLink.svelte'
</script>

<nav class="navbar">
  <div class="nav-container">
    <Logo />
    <ul class="nav-links">
      <li>
        <a href="/"
          class:selected={$state.activePage === 'home'}
        >Home</a>
      </li>
      <li>
        <a href="/caches"
          class:selected={$state.activePage === 'caches'}
        >Caches</a>
      </li>
      <li>
        <a href="/about"
          class:selected={$state.activePage === 'about'}
        >About</a>
      </li>
    </ul>
    <LoginLink />
  </div>
</nav>

<style>
</style>