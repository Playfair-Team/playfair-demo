<script lang="ts">
  import MathCellIcon from './MathCell-button.png'; 
  import TextCellIcon from './TextCell-button.png';
  import TextCell from '$lib/TextCell.svelte';
  import MathCell from '$lib/MathCell.svelte';
  import { cellStore } from '$lib/stores.js'; 
  import { v4 as uuidv4 } from "uuid";

  export let hide = false;
  export let cellIndex: number;

  function addMathCell(){
    let newEquation = { id: uuidv4(), cellType: "EqCell" };
    let newMathCell = { id: uuidv4(), cellType: "MathCell", component: MathCell, equations: [newEquation]};	

    if (cellIndex == null){
      console.log("Insert cell at the end of cellStore")
		  $cellStore[$cellStore.length] = newMathCell;	
    } else {
      console.log("Insert cell at cellIndex: " + cellIndex)
      $cellStore.splice(cellIndex, 0, {}); 
      $cellStore[cellIndex] = newMathCell; 
    }

    console.log("Added MathCell. cellStore:");
    console.log($cellStore); 
  }

  function addTextCell(){
    let newTextCell = { id: uuidv4(), cellType: "TextCell", component: TextCell};	

    if (cellIndex == null){
      console.log("Insert cell at the end of cellStore")
		  $cellStore[$cellStore.length] = newTextCell;	
    } else {
      console.log("Insert cell at cellIndex: " + cellIndex)
      $cellStore.splice(cellIndex, 0, {}); 
      $cellStore[cellIndex] = newTextCell;
    }

    console.log("Added TextCell. cellStore:");
    console.log($cellStore); 
  }
</script>

<div class="{hide ? 'NewCellHide' : 'NewCell'}">
  <hr />
  <button class="MathCell-button" on:click={addMathCell}>
    <img src={MathCellIcon} alt="Create MathCell"/>
  </button>
  <button class="TextCell-button" on:click={addTextCell}>
    <img src={TextCellIcon} alt="Create TextCell"/>
  </button>
  <hr />
</div>

<style>
  .NewCell {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 25px;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 700px;
  }

  .NewCellHide {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 25px;
    margin-bottom: -3px;
    width: 700px;
    opacity: 0;
    transition: 0.3s;
  }

  .NewCellHide:hover {
    opacity: 1;
  }

  img {
    width: 20px;
    height: 20px;

    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  button{
    background-color: white;
    border: none;
    padding: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: 0.1s;
  }

  button:hover{
    opacity: 0.5;
  }

  .MathCell-button{
    margin-left: 5px;
    margin-right: 2.5px;
  }

  .TextCell-button{
    margin-left: 2.5px;
    margin-right: 5px;
  }

  hr{
    width: 100%;
    border: 0.5px solid #ccc;
    margin: 10px 0;
  }
</style>