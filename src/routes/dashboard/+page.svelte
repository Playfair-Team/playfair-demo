<script>
  import NotebookListItem from '$lib/NotebookListItem/NotebookListItem.svelte';
  import { notebookStore } from '$lib/stores.js';
  import Modal from '$lib/Modal.svelte'; // TODO:

  $notebookStore = [
    { 
      id:'ba502cb7-3fc3-445a-b125-88d9341902e5', 
      title: "Notebook 1", 
      date_updated: "09/24/2020", 
      date_created: "06/13/2019"
    },
    { 
      id:'ba502cb7-3fc3-445a-b125-88d9341902e5', 
      title: "Notebook 2", 
      date_updated: "09/24/2020", 
      date_created: "06/13/2019"
    },
    { 
      id:'ba502cb7-3fc3-445a-b125-88d9341902e5', 
      title: "Notebook 3", 
      date_updated: "09/24/2020", 
      date_created: "06/13/2019"
    },
    { 
      id:'ba502cb7-3fc3-445a-b125-88d9341902e5', 
      title: "Notebook 4", 
      date_updated: "09/24/2020", 
      date_created: "06/13/2019"
    },
    { 
      id:'ba502cb7-3fc3-445a-b125-88d9341902e5', 
      title: "Notebook 5", 
      date_updated: "09/24/2020", 
      date_created: "06/13/2019"
    },
	];
  
</script>

<div class="container">
  <div class="content">
    <div class="dash-header-content">
      <h1>MY NOTEBOOKS</h1>
      <button class="create-new" ><span>+</span> CREATE NEW</button>
    </div>
    <hr class="solid">
    <div class="notebook-list">
      <div class="list-header">
        <p class="title">TITLE</p>
        <p>DATE UPDATED</p>
        <p>DATE CREATED</p>
      </div>
      {#each $notebookStore as notebookItem }
        <div>
          <svelte:component this={NotebookListItem} notebookAttributes={notebookItem}/>
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .container{
    padding: 25px;
    padding-bottom: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    
  }
  .content{
    flex-grow: 1;
    max-width: 900px;
  }

  .dash-header-content{
    display: flex;
  }

  .list-header{
    display: flex;
    padding-right: 25px;
    height: 40px;
  }

  .list-header > * {
    margin-left: 10px;
    margin-right: 10px;
    font-size: 0.9em;
  }

  .title{
    flex-grow: 1;
  }

  h1{
    font-size: 2.3em;
    margin: 0;
    font-weight: 200;
    margin-bottom: -5px;

    flex-grow: 1;

    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  button{
    background-color: black;
    color: #fff;
    font-family: Jost;
    border: none;
    padding: 7px 20px;
    padding-top: 2px;
    padding-left: 18px;
    font-size: 1.2em;
    font-weight: 300;
    cursor: pointer;
    text-decoration: none;

    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;

    transition: 0.2s;
  }

  button:hover{
    background-color: white;
    color: black;
    outline: black 2px solid;
  }

  span{
    font-weight: 400;
    font-size: 1.4em;
  }

  hr.solid {
    border-top: 1px solid #000000;
    margin-top: 15px;
  }

  .notebook-list{
    margin-top: 15px;
  }
</style>