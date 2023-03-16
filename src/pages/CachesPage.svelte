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

  let showModal = false
  let cache = { gc: '', name: '', kind: '', coords: '', verified: false }
  let place = ''
</script>

{#if showModal}
  <Dialog bind:showModal>
    <h2 slot="header">Add Cache</h2>
    <!-- <Select id="cacheKind" options={cacheTypes}
      label="Type"
      valid=true
      on:select={(event) => (console.log(event.detail))}
    />-->
    <Select items={$places} searchable=true />
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
    <Switch caption="Verified" bind:checked={cache.verified} />
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
