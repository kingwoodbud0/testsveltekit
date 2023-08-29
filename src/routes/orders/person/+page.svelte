<script>
  import Layout from './../../+layout.svelte';
  
    export let data;
</script>
  
<Layout>
Testing...
{#each data.items as choice}
  <div>
    <a href={`/orders/person/${choice.name}`}>{choice.name}</a>
  </div>
{/each}
</Layout>