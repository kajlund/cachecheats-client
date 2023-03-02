<script>
  import state from '../../stores/state'
  import userStore from '../../stores/user'
  import { logout } from '../../api/auth'
  import notyf from '../../lib/notyf'

  import Button from '../Button.svelte'
    import NotFoundPage from '../../pages/NotFoundPage.svelte'

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
</style>