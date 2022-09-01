<script lang="ts">
  import DeleteIcon from './delete-button.png';
  export let notebookAttributes: any;
</script>

<div class="container" id={notebookAttributes.id}>
  <p class="title">{notebookAttributes.title}</p>
  <p>{notebookAttributes.date_updated}</p>
  <p>{notebookAttributes.date_created}</p>
  <button class="delete-button" >
    <img src={DeleteIcon} alt="Delete Cell"/>
  </button>
</div>

<style>
  .container{
    display: flex;
    align-items: center;
    width: 100%;
    height: 50px;
    background-color: rgb(227, 227, 227);
    margin-top: 10px;

    transition: 0.2s;
  }

  .container:hover{
    background-color: rgb(220, 220, 220);
  }

  p {
    margin-left: 10px;
    margin-right: 10px;
    font-weight: 300;
  }

  .delete-button {
    background-color: rgba(255, 255, 255, 0);
    border: none;
    padding: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-left: 10px;
    margin-right: 10px;
    
    transition: 0.1s;
  }

  .delete-button:hover{
    opacity: 0.5;
  }

  .title{
    flex-grow: 1;
  }

  img {
    width: 15px;
    height: 15px;

    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }
</style>

