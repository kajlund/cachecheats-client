<script>
  import { MD5 } from 'md5-js-tools'

  import state from '../../stores/state'
  import userStore from '../../stores/user'
  import { logout } from '../../api/auth'
  import notyf from '../../lib/notyf'

  import Button from '../Button.svelte'

  const base = 'https://www.gravatar.com/avatar/'
  $: url = $userStore.user.email ? MD5.generate($userStore.user.email) : ''

  const logoff_handler = async () => {
    let username = $userStore.user.username
    try {
      await logout()
      notyf.success(`${username} logged out`)
    } catch (error) {
      console.log(error)
      notyf.error(error.message)
    }
  }
</script>

<div class="nav-aside">
  {#if $userStore.token}
    <img class="gravatar" src={base + url + '?s=36'} alt="avatar">
    <Button caption="Logoff" style="outline" on:click={logoff_handler}/>
  {:else}
    <Button caption="Login" style="outline" on:click={() => {
      state.toggleItem('showLogon', true)
    }}/>
  {/if}
</div>

<style>
  .nav-aside {
    display: flex;
    align-items: center;
  }
  .gravatar {
    border-radius: 50%;
    margin-right: 1rem;
    border: 3px solid #333;
  }
</style>