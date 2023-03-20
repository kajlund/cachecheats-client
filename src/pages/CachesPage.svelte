<script>
// @ts-nocheck

  import Button from '../components/Button.svelte'
  import CacheList from '../components/caches/CacheList.svelte'
  import PageTitle from '../components/PageTitle.svelte'
  import Dialog from '../components/Dialog.svelte'
  // import Select from '../components/Select.svelte'
  import Switch from '../components/Switch.svelte'
  import TextInput from '../components/TextInput.svelte'
  import places from '../stores/places'
  import { cacheTypes } from '../lib/cacheHelpers'
  import Select from 'svelte-select'

  export let params
  // gc, kind, name, coords, verified, place_id, user_id

  let showModal = false
  let cache = { gc: '', name: '', kind: '', coords: '', verified: false }
  let place = null
  let kind = null
</script>

{#if showModal}
  <Dialog bind:showModal class="form">
    <h2 slot="header">Add Cache</h2>
    <div class="form">
      <div class="form-control">
        <label for="selKind" class="label">Kind</label>
        <Select id="selKind" class="field" items={cacheTypes} searchable=true
          clearable={true} bind:kind placeholder="Choose cachetype"
          showChevron />
      </div>
      <TextInput
        type="text"
        id="gc"
        label="GC"
        value={cache.gc}
        valid={cache.gc.length > 0}
        placeholder="GC8G980"
        errorMessage="You must provide a GC code"
        on:input={event => (cache.gc = event.target.value)}
      />
      <TextInput
        type="text"
        id="name"
        label="Name"
        bind:value={cache.name}
        valid={cache.name.length > 0}
        placeholder="Cache name"
        errorMessage="You must provide a cache name"
        on:input={event => (console.log(event))}
      />
      <TextInput
        type="text"
        id="coords"
        label="Coords"
        bind:value={cache.coords}
        valid={true}
        placeholder="Coordinates"
        errorMessage="You must provide coords"
        on:input={event => (console.log(event))}
      />
      <div class="form-control">
        <label for="selPlace" class="label">Municipality</label>
        <Select id="selPlace" class="field" items={$places} searchable=true
          clearable={true} bind:place placeholder="Choose municipality"
          showChevron />
      </div>

      <Switch caption="Verified" bind:checked={cache.verified} />
    </div>
  </Dialog>
{:else}
  <section class="page">
    <PageTitle icon='distance' title='Caches'>
      <Button caption="New Cache" icon="add_location_alt"
        style="outline" on:click={() => (showModal = true)} />
    </PageTitle>
    <CacheList />
  </section>
{/if}

<style>
  .form {
    min-width: 400px;
  }
</style>