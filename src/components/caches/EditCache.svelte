<script>
// @ts-nocheck

  import notyf from '../../lib/notyf'
  import Button from "../Button.svelte"
  import Dialog from '../Dialog.svelte'
  import TextInput from '../TextInput.svelte';

  import { getAllPlaces } from '../../api/place';
  import places from '../../stores/places'

  let gc = ''
  let kind = ''
  let name = ''
  let coords = ''
  let verified = false
  let place_id = null
  let user_id = null

  let showModal = false

  $: isValid = gc && name

  function save_handler() {
    console.log('Save')
  }

  function cancel_handler() {
    // state.toggleItem('showLogon', false)
    console.log('Canceled')
  }
</script>

<Dialog title="Edit Cache" on:cancel={cancel_handler}>
  <form on:submit|preventDefault={save_handler}>
    <TextInput
      type="text"
      id="gc"
      label="GC"
      value={gc}
      valid={gc.length > 0}
      placeholder="GC8G980"
      errorMessage="You must provide a GC code"
      on:input={event => (gc = event.target.value)}
    />
    <TextInput
      type="text"
      id="name"
      label="Name"
      bind:value={name}
      valid={name.length > 0}
      placeholder="Cache name"
      errorMessage="You need to provide a name"
      on:input={event => (name = event.target.value)}
    />
    <div class="form-commands">
      <Button type="submit" disabled={!isValid} style="outline" caption="Login"/>
    </div>
  </form>
</Dialog>
