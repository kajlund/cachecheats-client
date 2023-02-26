<script>
  import state from '../../stores/state'

  let open = $state.sidebar
</script>

<button
  class:open={$state.sidebar}
  on:click={() => {
    state.toggleSidebar()
  }}
>
  <!-- svg with 3 lines -->
  <svg width="32" height="24">
    <line id="top" x1="2" y1="4" x2="30" y2="4" />
    <line id="middle" x1="2" y1="13" x2="24" y2="13" />
    <line id="bottom" x1="2" y1="22" x2="30" y2="22" />
  </svg>
</button>

<style>
  button {
    background-color: transparent;
    border: 3px solid var(--col-primary);
    border-radius: 6px;
    z-index: 20;
    width: 46px;
    height: 33px;
    margin-right: 6px;
    margin-left: 0.5rem;
  }
  svg {
    min-height: 24px;
    transition: transform 0.2s ease-in-out;
  }
  svg line {
    stroke: var(--col-primary); /* `currentColor` means inherit color from the text color */
    stroke-width: 3;
    transition: transform 0.3s ease-in-out;
  }
  .open svg {
    transform: scale(0.7);
  }

  /* rotate the top line */
  .open #top {
    transform: translate(6px, 0px) rotate(45deg);
  }

  /* hide the middle */
  .open #middle {
    opacity: 0;
  }

  /* rotate the bottom line */
  .open #bottom {
    transform: translate(-12px, 9px) rotate(-45deg);
  }
</style>

