<script>
// @ts-nocheck

  export let caption = 'Button'
  export let icon = null
  export let type = 'button'
  export let style = 'btn'
  export let disabled = false
</script>


<button class="{style}" {type}
  {disabled} on:click>
  {#if icon}
    <span class="icon">
      <i class="material-symbols-rounded">{icon}</i>
    </span>
  {/if}
  <span class="caption">{caption}</span>
</button>


<style>
  button {
    display: flex;
    align-items: center;
    color: var(--col-white);
    background-color: var(--col-primary-lt);
    border: 2px solid var(--col-primary);
    border-radius: 4px;
    padding: 0.5rem 1rem;
    cursor: pointer;
    text-decoration: none;
    letter-spacing: var(--spacing);
    transition: var(--transition);
  }

  button:focus {
    outline: none;
  }

  button:hover,
  button:active {
    /* background: #ec4224;
    border-color: #ec4224; */
    background-color: #e6e6e6;
    border-color: #adadad;
    box-shadow: 1px 1px 8px rgba(77, 51, 51, 0.26);
  }
  button.disabled,
  button.disabled:hover,
  button.disabled:active {
    background: #ccc;
    border-color: #ccc;
    color: #959595;
    box-shadow: none;
    cursor: not-allowed;
  }

  button.success {
    color: #fff;
    background: #5cb85c;
    border-color: #5cb85c;
  }
  button.success:hover,
  button.success:active {
    background: #449d44;
    border-color: #449d44;
    box-shadow: 1px 1px 8px rgba(77, 51, 51, 0.26);
  }

  button.danger {
    color: #fff;
    background: #bb3019;
    border-color: #bb3019;
  }
  button.danger:hover,
  button.danger:active {
    background: #962815;
    border-color: #962815;
    box-shadow: 1px 1px 8px rgba(77, 51, 51, 0.26);
  }

  .outline {
    background: transparent;
    color: var(--col-primary);
    border: 3px solid var(--col-primary);
    border-radius: 1rem;
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
  .outline:disabled,
  .outline:disabled:hover,
  .outline:disabled:active {
    background: #ccc;
    border-color: #ccc;
    color: #959595;
    box-shadow: none;
    cursor: not-allowed;
  }

  .outline.success {
    border-color: #449d44;
    color: #449d44;
  }
  .outline.success:hover,
  .outline.success:active {
    background: #c2ffd1;
  }

  span.icon {
    display: flex;
    align-items: center;
    margin-right: 0.4rem;
  }
</style>
