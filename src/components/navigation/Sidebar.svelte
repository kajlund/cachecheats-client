<script>
  import { fly, fade } from 'svelte/transition'

  import state from '../../stores/state'
</script>

<div class="sidebar-container" transition:fly={{ x: -1000}}>
  <div class="sidebar" transition:fade={{delay:500}}>
    <ul class="sidebar-links">
      <li>
        <a href="/"
          class:selected={$state.activePage === 'home'}
        >
          <i class="material-symbols-rounded">home</i>
          Home
        </a>
      </li>
      <li>
        <a href="/caches"
          class:selected={$state.activePage === 'caches'}
        >
          <i class="material-symbols-rounded">distance</i>
          Caches
        </a>
      </li>
      <li>
        <a href="/about"
          class:selected={$state.activePage === 'about'}
        >
          <i class="material-symbols-rounded">info</i>
          About
        </a>
      </li>
    </ul>
  </div>
</div>

<style>
  a.selected {
    border-left: 3px solid var(--col-primary);
    padding-left: 0.5rem;
  }
  a i {
    font-size: 30px;
    margin-right: 0.5rem;
  }
  .sidebar-container {
    background: var(--col-grey-lt);
    position: fixed;
    top: 3.1rem;
    left: 0;
    width: 20rem;
    z-index: 4;
    padding-left: 1rem;
    box-shadow: var(--shadow-sm);
    border-bottom-right-radius: 6px;
  }
  .sidebar {
    width: var(--smallWidth);
    margin: 0 auto;
  }
  .sidebar-links {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  .sidebar-links a {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 400;
    letter-spacing: var(--spacing);
    margin: 0.5rem 0;
    transition: var(--mainTransition);
  }
  .sidebar-links a:hover {
    color: var(--col-grey-dk);
    padding-left: 0.1rem;
  }
</style>