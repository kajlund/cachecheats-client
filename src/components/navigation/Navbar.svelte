<script>
  import state from '../../stores/state'
  import BigNavbar from './BigNavbar.svelte'
  import SmallNavbar from './SmallNavbar.svelte'

  let width

  $: if (width > 992) {
    state.toggleItem('sidebar', false)
  }
</script>

<svelte:window bind:innerWidth={width} />

{#if width > 992}
  <div class="page-icon">
    <BigNavbar />
  </div>
{:else}
  <SmallNavbar />
{/if}
