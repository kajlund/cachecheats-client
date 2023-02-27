<script>
  export let controlType = "input";
  export let id;
  export let label;
  export let rows = 1;
  export let value;
  export let type = "text";
  export let valid = false;
  export let placeholder = "";
  export let errorMessage = "";

  let touched = false;
</script>

<div class="form-control">
  <label for={id}>{label}</label>
  {#if controlType === "textarea"}
    <textarea
      class:invalid={!valid && touched}
      {rows}
      {id}
      bind:value
      on:input
      on:blur={() => (touched = true)}
    />
  {:else}
    <input
      class:invalid={!valid && touched}
      {type}
      {id}
      {value}
      {placeholder}
      on:input
      on:blur={() => (touched = true)}
    />
  {/if}
  {#if errorMessage && !valid && touched}
    <p class="error-message">{errorMessage}</p>
  {/if}
</div>

<style>
  input,
  textarea {
    display: block;
    width: 100%;
    font: inherit;
    border: 1px solid var(--col-grey-md);
    border-radius: 4px;
    background: var(--col-white);
    padding: 0.2rem 0.25rem;
    transition: border-color 0.1s ease-out;
  }

  input:focus,
  textarea:focus {
    border-color: var(--col-primary);
    outline: none;
  }
  input::placeholder {
    opacity: 0.2;
  }

  label {
    font-size: 0.8rem;
    color: var(--col-grey-dk);
    display: block;
    width: 100%;
  }

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
</style>
