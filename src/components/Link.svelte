<script>
  export let caption = 'Link'
  export let href = '#'
  export let icon = ''
  export let iconLeft = '1'
</script>

<div class="link">
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
    display: flex;
    align-items: center;
  }

  .icon-left,
  .icon-right {
    font-size: 2rem;
  }
</style>
