<script>
  export let icon = 'info'
  export let title = 'Page Title'
</script>

<header class="page-header">
  <i class="material-symbols-rounded">{icon}</i>
  <h2>{title}</h2>
</header>

<style>
  /* Page Headings */
.page-header {
  display: flex;
  height: 50px;
  align-items: center;
  margin: 1rem 0;
}
.page-header h2 {
  /* padding-top: 0.5rem; */
  margin: 0;
  padding: 0;
  font-size: 40px;
}
.page-header i {
  /* height: 46px; */
  margin: 0;
  margin-top: -4px;
  padding: 0;
  display: block;
  font-size: 46px;
  color: var(--col-primary);
}

</style>