<script>
// @ts-nocheck

  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  export let id
  export let options;
  export let label = 'Select'
  export let valid = false
  export let errorMessage = 'Required'

  let selected
  let touched = false
</script>

<div class="form-control">
  <label for={id}>{label}</label>
  <select id={id} bind:value={selected}
    class:invalid={!valid && touched}
    on:change={() => (dispatch('select', {selected}))}
    on:blur={() => (touched = true)}
  >
    {#each options as option}
      <option value={option}>
        {option.text}
      </option>
    {/each}
  </select>
  {#if errorMessage && !valid && touched}
    <p class="error-message">{errorMessage}</p>
  {/if}
</div>

<style>
  .form-control {
    padding: 0.5rem 0;
    width: 100%;
    margin: 0.25rem 0;
  }
  .error-message {
    margin: 0;
    padding: 0;
    color: var(--col-primary);
    font-size: 0.8rem;
  }
  select {
    display: block;
    width: 100%;
    font: inherit;
    border: 1px solid var(--col-grey-md);
    border-radius: 4px;
    background: var(--col-white);
    padding: 0.2rem 0.25rem;
    transition: border-color 0.1s ease-out;
  }
  select:focus {
    border-color: var(--col-primary);
    outline: none;
  }
  select::placeholder {
    opacity: 0.2;
  }
  label {
    font-size: 0.8rem;
    color: var(--col-grey-dk);
    display: block;
    width: 100%;
  }

</style>