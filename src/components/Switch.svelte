<script>
  export let caption
  export let checked = false;
</script>

<div class="form-control">
  <p>{caption}</p>
  <label class="switch">
    <input type="checkbox" bind:checked />
    <span class="slider" />
  </label>
</div>

<style>
  .form-control {
    display: flex;
    align-items: baseline;
    padding: 0.5rem 0;
    width: 100%;
    margin: 0.25rem 0;
  }
  p {
    font-size: 0.8rem;
    color: var(--col-grey-dk);
    margin-right: 0.4rem;
  }
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 34px;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: var(--col-white);
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }

  input:checked + .slider {
    background-color: var(--col-primary);
  }

  input:checked + .slider {
    box-shadow: 0 0 1px var(--col-primary-dk);
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
</style>
