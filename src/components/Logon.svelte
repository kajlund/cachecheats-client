<script>
// @ts-nocheck
  import isEmail from 'validator/es/lib/isEmail'

  import { login } from '../api/auth'
  import state from '../stores/state'
  import userStore from '../stores/user'
  import notyf from '../lib/notyf'
  import Button from "./Button.svelte"
  import Modal from "./Modal.svelte"
  import TextInput from "./TextInput.svelte"

  let email = ''
  let password = ''
  let isValid

  $: isValid = isEmail(email) && password

  function cancel_handler() {
    state.toggleItem('showLogon', false)
  }

  const logon_handler = async () => {
    try {
      await login(email, password)
      state.toggleItem('showLogon', false)
      notyf.success(`${$userStore.user.username} logged in`)
    } catch (error) {
      console.log(error)
      notyf.error(error.message)
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
    <div class="form-commands">
      <Button type="submit" disabled={!isValid} style="outline" caption="Login"/>
    </div>

  </form>
</Modal>

<style>
  .form-commands {
    display: flex;
    flex-direction: row-reverse;
  }
</style>