<script lang="ts">
  import { onMount } from 'svelte';
  import { cellStore } from '$lib/stores.js'; 
  import oversear from '$lib/oversear.js';
  import { v4 as uuidv4 } from "uuid";
  import { variableStore } from '$lib/stores.js';

  export let cellIndex: any;
  export let id: string;

  let keyPress: string;

  onMount(()=>{
    const mf = document.getElementById(id);

    mf?.focus(); //Initialize EqCell as focussed

    mf?.addEventListener('input',(e) => {
      // If empty & DELETE pressed, remove equation from cellStore
      if(mf?.value == '' && keyPress === "Backspace"){
        deleteEquation()
      }
    });

    mf?.addEventListener('change',(e) => {
      oversear.addEquation(id, mf.value)
      // console.log(oversear.solvedVariables)

      $variableStore = Object.entries(oversear.solvedVariables)

      // If field is focussed and changed (i.e. ENTER pressed), add new equation to cellStore
      if(mf?.hasFocus()){
        addEquation()
      }

    });
  })

  function deleteEquation(){
    if($cellStore[cellIndex].equations.length > 1){
      $cellStore[cellIndex].equations = $cellStore[cellIndex].equations.filter(function(value){ 
        if (value.id != id) return value;
      });
    } 

    keyPress = "";
  }

  function addEquation(){
    let uuid = uuidv4()

    // Writing to cellStore
    length = $cellStore[cellIndex].equations.length;	
    $cellStore[cellIndex].equations[length] = { id: uuid, cellType: "EqCell" };

    keyPress = "";
  }


</script>

<svelte:window on:keydown={(e) => {keyPress = e.key}}/>
<div class="eq-cell">
  <math-field id={id} default-mode="math" />
</div>

<style>
  math-field {
    display: inline-block;
    vertical-align: middle; 
    border: 0;
    padding-left: 5px; padding-right: 5px;
    width: 100%;
  }
  math-field:focus-within {
    outline: 0px;
  }
  .eq-cell {
    display: flex;
    align-items: center;
    padding-left: 15px; padding-right: 15px;
  }

  .eq-cell:hover{
    background-color: #f5f5f5;
  }
</style>