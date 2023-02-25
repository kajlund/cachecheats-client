<script>
  import user from '../../stores/user';
  import state from '../../stores/state';
</script>

<div class="nav-aside">
{#if $user.loggedOn}
  <a href="/" class="btn btn-outline"
    on:click={() => {
      state.toggleItem('sidebar', false)
    }}
  >Logout</a>
{:else}
  <a href="/" class="btn btn-outline"
    on:click={() => {
      state.toggleItem('sidebar', false)
    }}
  >Login</a>
{/if}
</div>

<style>
  .nav-aside {
    display: flex;
    align-items: center;
  }

  .nav-aside a {
    margin-right: 1rem;
  }
</style>
