<script>
  import { onMount } from 'svelte'
  import Time from 'svelte-time'

  import notyf from '../lib/notyf'
  import PageTitle from '../components/PageTitle.svelte'
  // import cacheStore from '../stores/cache'
  import { getCacheById } from '../api/cache'
  import Button from '../components/Button.svelte'
  import Link from '../components/Link.svelte'

  export let params
  let cache = {}

  onMount(async () => {
    try {
      cache = await getCacheById(params.id)
      console.log(cache)
    } catch (error) {
      console.log(error)
      notyf.error(error.message)
    }
  })
</script>

<section class="page">
  <PageTitle icon='distance' title='Cache Details'>
      <Link href={`/caches`} caption='Back'
      icon='chevron_left' iconLeft='1' style="outline" />
  </PageTitle>
  <article>
    <div class="row">
      <div class="colth">Kind:</div>
      <div class="coltd">{cache.kind}</div>
    </div>
    <div class="row">
      <div class="colth">Name:</div>
      <div class="coltd">{cache.name}</div>
    </div>
    <div class="row">
      <div class="colth">GC:</div>
      <div class="coltd">{cache.gc}</div>
    </div>
    <div class="row">
      <div class="colth">Coords:</div>
      <div class="coltd">{cache.coords}</div>
    </div>
    <div class="row">
      <div class="colth">Place:</div>
      <div class="coltd">{cache.place}</div>
    </div>
    <div class="row">
      <div class="colth">Verified:</div>
      <div class="coltd">{cache.verified}</div>
    </div>
    <div class="row">
      <div class="colth">User:</div>
      <div class="coltd">{cache.user}</div>
    </div>
    <div class="row">
      <div class="colth">Created:</div>
      <div class="coltd">
        <Time timestamp={cache.created_at} format="D.M.YYYY H:m" />
      </div>
    </div>
    <div class="row">
      <div class="colth">Updated:</div>
      <div class="coltd">
        <Time timestamp={cache.updated_at} format="D.M.YYYY H:m" />
      </div>
      <!-- <div class="coltd">{cache.updated_at}</div> -->
    </div>
  </article>
</section>

<style>
  article {
    background: var(--col-grey-lt);
    padding: 2rem;
    border: 1px solid var(--col-primary);
    border-radius: 1rem;
    box-shadow: var(--shadow-lg);
    max-width: 650px;
  }
  .row {
    display: flex;
    padding: 0.4rem 0;
  }
  .colth {
    width: 20%;
  }
  .coltd {
    width: 80%;
  }
</style>