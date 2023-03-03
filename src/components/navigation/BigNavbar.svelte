<script>
  import state from '../../stores/state'

  import Logo from './Logo.svelte'
  import NavbarAside from './NavbarAside.svelte'
  $: active = $state.activePage
</script>

<nav class="navbar">
  <div class="nav-container">
    <Logo />
    <ul class="nav-links">
      <li>
        <a href="/" class:sel={active === 'home'}>
          <i class="material-symbols-rounded">home</i>Home
        </a>
      </li>
      <li>
        <a href="/caches" class:sel={active === 'caches'}>
          <i class="material-symbols-rounded">distance</i>Caches
        </a>
      </li>
      <li>
        <a href="/about" class:sel={active === 'about'}>
          <i class="material-symbols-rounded">info</i>About
        </a>
      </li>
    </ul>
    <NavbarAside />
  </div>
</nav>

<style>
  .nav-links {
    display: flex;
    align-items: center;
  }
  .nav-links a {
    display: flex;
    align-items: center;
    margin-right: 0.5rem;
    font-size: 1.2rem;
    font-weight: 400;
    letter-spacing: var(--spacing);
    transition: var(--mainTransition);
    padding: 0.25rem 0.5rem;
  }
  .nav-links a i {
    font-size: 24px;
    margin-right: 0.3rem;
  }
  .nav-links a:hover {
    border-bottom: 3px solid var(--col-primary);
  }
  a.sel {
    border-bottom: 3px solid var(--col-primary);
  }
</style>
