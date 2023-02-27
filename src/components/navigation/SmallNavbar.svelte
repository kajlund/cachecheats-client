<script>
  import state from '../../stores/state'
  import user from '../../stores/user'

  import Burger from './Burger.svelte'
  import Button from '../Button.svelte'
  import Logo from './Logo.svelte'
  import LoginLink from './LoginLink.svelte'
</script>

<nav class="navbar">
  <div class="nav-container">
    <Burger
      on:click={() => {
        state.toggleItem('sidebar', true)
      }}
    />
    <Logo />
    {#if $user.loggedOn}
      <LoginLink />
    {:else}
      <Button caption="Login" style="outline" on:click={() => {
        state.toggleItem('showLogon', true)
      }}/>
    {/if}
  </div>
</nav>
