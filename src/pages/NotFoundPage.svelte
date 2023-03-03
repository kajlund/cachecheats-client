<script>
  import page from 'page'

  import PageTitle from '../components/PageTitle.svelte'
  import Button from '../components/Button.svelte'

  export let params

  function navigate_home() {
    console.log('navigate')
    page('/')
  }
</script>

<section class="page">
  <PageTitle icon='info' title='Page Not Found' />
  <Button caption="Home" style="outline" on:click={navigate_home} />
</section>