<script>
  import { variableStore } from '$lib/stores.js';

  // TODO: Hide sidepanel

</script>

<div class="side-panel">
  <div class="menu">
    <div class="tab"><h2>Variables</h2></div>
  </div>
  <div class="variable-list">
    {#each $variableStore as variable}
      <math-field read-only>{variable[0]} = {variable[1]}</math-field>
    {/each}
  </div>
</div>

<style>
  .side-panel {
    flex: 0 0 200px;
    min-height: 85vh;
    margin-left: 20px;
  }

  .menu{
    display: flex;
    align-items: center;
    justify-content: right;
  }

  .tab{
    background: #fafafa;
    padding: 10px;
    width: 50%;
    text-align: center;
  }

  .tab > h2 {
    margin: 0;
    font-size: 1rem;
    font-weight: 400;

    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  .variable-list{
    padding: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    background: #fafafa;
    overflow-y: auto;
    min-height: 150px;
  }
</style>