<script>
  import { onMount } from 'svelte'

  import { queryCaches } from '../../api/cache'
  import notyf from '../../lib/notyf'
  import caches from '../../stores/cache'
  import CacheCard from './CacheCard.svelte'
  import Spinner from '../Spinner.svelte'

  let limit = 20
  let skip = 0
  let loading = true

  onMount(async () => {
    try {
      const data = await queryCaches(limit, skip)
      skip += data.count
      caches.clear()
      caches.addItems(data.caches)
      console.log($caches)
      loading = false
    } catch (error) {
      console.log(error)
      loading = false
      notyf.error(error.message)
    }
  })
</script>

{#if loading}
  <Spinner />
{:else}
  <div class="caches-center">
    {#each $caches as cache (cache.id)}
      <CacheCard {cache} />
    {/each}
  </div>
{/if}

<style>
  .caches-center {
    width: var(--smallWidth);
    margin: 0 auto;
    max-width: var(--maxWidth);
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    column-gap: 1.8rem;
    row-gap: 1.8rem;
    /* align-items: start; */
  }

</style>
