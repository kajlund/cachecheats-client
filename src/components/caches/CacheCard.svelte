<script>
  import Time from 'svelte-time'

  import { getImage } from '../../lib/cacheHelpers'
  import Link from '../Link.svelte'

  export let cache
  const image = getImage(cache.kind)
</script>

<article class="card">
  <div class="card-header">
    <img src={image} alt={cache.kind} />
    <div class="title">{cache.gc}</div>
    <Link href={`/caches/${cache.id}`} caption='Details'
      icon='chevron_right' iconLeft='0' />
  </div>
  <div class="card-body">
    <p>{cache.name}</p>
    <p>Coords: {cache.coords}</p>
    <p>{cache.place}</p>
  </div>
  <div class="card-footer">
    Updated: <Time relative timestamp={cache.updated_at} /><br />
    Created: <Time relative timestamp={cache.created_at} />
  </div>
</article>

<style>
  .card {
    background: var(--col-grey-lt);
    border: 1px solid var(--col-grey-dmd);
    border-radius: 0.6rem;
    margin-bottom: 2rem;
    box-shadow: var(--shadow-md);
    transition: var(--transition);
    display: grid;
    grid-template-rows: auto 1fr;
  }

  .card-header {
    display: flex;
    height: 52px;
    align-items: center;
    align-content: stretch;
    border-bottom: 1px solid var(--col-grey-md);
    padding: 0.4rem;
  }

  .card-header img {
    display: inline-block;
    width: 32px;
    height: 32px;
  }

  .card-header .title {
    margin-left: 0.5rem;
    width: 100%;
  }

  .card-body {
    padding: 0.4rem;
  }
  .card-footer {
    padding: 0.4rem;
    font-size: 0.8rem;
    border-top: 1px solid var(--col-grey-md);
  }
</style>