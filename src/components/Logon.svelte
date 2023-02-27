<script>
// @ts-nocheck
  import { createEventDispatcher } from 'svelte'
  import isEmail from 'validator/es/lib/isEmail'

  import { login } from '../api/auth'
  import Button from "./Button.svelte"
  import Modal from "./Modal.svelte"
  import TextInput from "./TextInput.svelte"

  const dispatch = createEventDispatcher()

  let email = ''
  let password = ''
  let isValid


  $: isValid = isEmail(email) && password

  function cancel_handler() {
    dispatch('cancelLogon')
  }

  const logon_handler = async () => {
    try {
      const result = await login(email, password)
      console.log(result)
    } catch (error) {
      console.error(error)
    }
  }
</script>

<Modal title="Login" on:cancel={cancel_handler}>
  <form on:submit|preventDefault={logon_handler}>
    <TextInput
      type="email"
      id="email"
      label="Email"
      value={email}
      valid={isEmail(email)}
      placeholder="user@gmail.com"
      errorMessage="You must provide a valid email address"
      on:input={event => (email = event.target.value)}
    />
    <TextInput
      type="password"
      id="password"
      label="Password"
      bind:value={password}
      valid={password.length}
      placeholder="Secret!"
      errorMessage="You need to provide a password"
      on:input={event => (password = event.target.value)}
    />
  </form>
  <Button disabled={!isValid} slot="footer" style="outline" caption="Login"
    on:click={logon_handler}/>
</Modal>