<script>
  import { fly, fade } from 'svelte/transition'
  import state from '../stores/state'

  import Button from "./Button.svelte";

  export let title = "";

  const closeModal = () => {
    state.toggleItem('showLogon', false)
  };
</script>

<div transition:fade
  class="backdrop"
  on:click={closeModal}
/>
<div transition:fly={{ y: 300 }} class="modal">
  <header>
    <slot name="header">
      <h1>{title}</h1>
    </slot>
  </header>
  <div class="content">
    <slot />
  </div>
  <footer>
    <slot name="footer">
      <Button on:click={closeModal}>Close</Button>
    </slot>
  </footer>
</div>

<style>
  h1 {
    color: var(--col-primary);
  }
  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.75);
    z-index: 10;
  }

  .modal {
    position: fixed;
    top: 10vh;
    left: 10%;
    width: 80%;
    padding: 1rem;
    background: whitesmoke;
    border-radius: 5px;
    z-index: 100;
    box-shadow: var(--shadow-lg);
  }
  .content {
    padding: 1rem;
  }

  footer {
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    padding: 1rem;
  }

  @media (min-width: 768px) {
    .modal {
      width: 40rem;
      left: calc(50% - 20rem);
    }
  }
  header {
    border-bottom: 3px solid var(--col-primary)
  }
</style>
