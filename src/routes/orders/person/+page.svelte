<script>
    export let data;
</script>
  
Testing...
{#each data.items as choice}
  <div>
    <a href={`/orders/person/${choice.name}`}>{choice.name}</a>
  </div>
{/each}