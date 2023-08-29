<script>
  import Layout from './+layout.svelte';
    export let page;
  </script>
  
  <Layout>
  <main>
    <h1>This is the {page.params.slug} page</h1>
  </main>
</Layout>