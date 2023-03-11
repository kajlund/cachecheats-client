<script>
  import Button from '../components/Button.svelte'
  import CacheList from '../components/caches/CacheList.svelte'
  import PageTitle from '../components/PageTitle.svelte'

  export let params
</script>

<section class="page">
  <PageTitle icon='distance' title='Caches'>
    <Button caption="New Cache" icon="add_location_alt" style="outline" />
  </PageTitle>
  <CacheList />
</section>

