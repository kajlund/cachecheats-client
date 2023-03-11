<script>
  export let caption = 'Link'
  export let href = '#'
  export let icon = ''
  export let iconLeft = '1'
  export let style = ''

  let styles = 'link ' + style
</script>

<div class={styles}>
  <a {href}>
    {#if iconLeft ===  '1'}
      <div class="link-content">
        <div class="icon icon-left">
          <i class="material-symbols-rounded">{icon}</i>
        </div>
        {caption}
      </div>
    {:else}
      <div class="link-content">
        {caption}
        <span class="icon icon-right">
          <i class="material-symbols-rounded">{icon}</i>
        </span>
      </div>
    {/if}
  </a>
</div>

<style>
  .link {
    display: flex;
    align-items: center;
  }
  .link a:hover {
    color: var(--col-primary-dk);
  }
  .link-content {
    margin: 0;
    padding: 0 0.8rem;
    display: flex;
    align-items: center;
  }
  .icon-left,
  .icon-right {
    font-size: 2rem;
  }
  .outline {
    background: transparent;
    color: var(--col-primary);
    border: 2px solid var(--col-primary);
    border-radius: 0.5rem;
    font-weight: bold;
    box-shadow: none;
  }
  .outline:hover,
  .outline:active {
    background: transparent;
    color: var(--col-primary-dk);
    border-color: var(--col-primary-dk);
    box-shadow: 1px 1px 8px rgba(77, 51, 51, 0.26);
  }
</style>
