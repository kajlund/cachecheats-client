<script>
  import { fly, fade } from 'svelte/transition'

  import state from '../../stores/state'
</script>

<div class="sidebar-container" transition:fly={{ x: -1000}}>
  <div class="sidebar" transition:fade={{delay:500}}>
    <ul class="sidebar-links">
      <li>
        <a href="/" on:click={() => state.toggleItem('sidebar', false)}
          class:sel={$state.activePage === 'home'}
        >
          <i class="material-symbols-rounded">home</i>
          Home
        </a>
      </li>
      <li>
        <a href="/caches" on:click={() => state.toggleItem('sidebar', false)}
          class:sel={$state.activePage === 'caches'}
        >
          <i class="material-symbols-rounded">distance</i>
          Caches
        </a>
      </li>
      <li>
        <a href="/about" on:click={() => state.toggleItem('sidebar', false)}
          class:sel={$state.activePage === 'about'}
        >
          <i class="material-symbols-rounded">info</i>
          About
        </a>
      </li>
    </ul>
  </div>
</div>

<style>
  .sidebar-container {
    background: var(--col-grey-lt);
    position: fixed;
    top: 62px;
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
    padding-left: 0.3rem;
  }
  .sidebar-links a:hover {
    color: var(--col-grey-dk);
    padding-left: 0.1rem;
  }
  .sidebar-links a i {
    margin-right: 0.3rem;
    font-size: 1.8rem;
  }
  .sel {
    border-left: 3px solid var(--col-primary);
  }
</style>