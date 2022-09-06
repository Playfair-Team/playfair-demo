<script lang="ts">
  import DeleteIcon from './Delete-button.png';
  import { cellStore } from '$lib/stores.js'; 

  export let cellAttributes: any = undefined; 

  function deleteCell(){
    $cellStore = $cellStore.filter(function(value, index, arr){ 
      if (value.id != cellAttributes.id) return value;
    });

    console.log("Deleted Cell. cellStore:");
		console.log($cellStore);
  }
</script>

<button class="Delete-button" on:click={deleteCell}>
  <img src={DeleteIcon} alt="Delete Cell"/>
</button>

<style>
  .Delete-button {
    background-color: rgba(255, 255, 255, 0);
    border: none;
    padding: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-left: 10px;
    
    transition: 0.1s;
  }

  .Delete-button:hover{
    opacity: 0.5;
  }

  img {
    width: 15px;
    height: 15px;

    user-drag: none;
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }
</style>
