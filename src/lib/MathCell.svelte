<script lang="ts">
  import DeleteButton from '$lib/delete-button/DeleteButton.svelte';
  import EquationCell from '$lib/equation-cell/EquationCell.svelte';
  import CreateNewCell from '$lib/create-new-cell/CreateNewCell.svelte';
  import { cellStore } from '$lib/stores.js'; 

  export let cellAttributes: any;

  let cellIndex: number;

  // Getting index of current cell in cellStore
  $cellStore.forEach((element, index) => { 
    if (element.id == cellAttributes.id) {
      cellIndex = index;
    }
  });
</script>

<CreateNewCell hide={true} cellIndex={cellIndex} />
<div class="math-container">
  <div class="math-cell">
    {#each $cellStore[cellIndex].equations as eq}
      <svelte:component this={EquationCell} cellIndex={cellIndex} id={eq.id}/>
    {/each}
    </div>
  <DeleteButton cellAttributes={cellAttributes}/>
</div>

<style>
  .math-container{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 725px;
    margin-top: 10px; margin-bottom: 10px;
  }

  .math-cell {
    display: flex;
    flex-flow: column;
    height: 100%;
    max-width: 700px;
    border: 1px solid #ccc;
    padding-top: 10px; padding-bottom: 10px;
    flex: 1;
  }
</style>