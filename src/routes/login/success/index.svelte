<script lang="ts">
  import { fade } from 'svelte/transition';

</script>

<div class="container" in:fade="{{ duration: 1000, delay: 200 }}">
  <h1>Welcome, ________</h1>
  <a href="/dashboard">GO TO DASHBOARD</a>
</div>

<style>
  h1{
    font-size: 2.5em;
    font-weight: 200;
    letter-spacing: 5px;

    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }
  
  a{
    background-color: black;
    color: #fff;
    font-family: Jost;
    border: none;
    padding: 10px 20px;
    font-size: 1.2em;
    font-weight: 300;
    cursor: pointer;
    text-decoration: none;
    margin: 10px;

    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;

    transition: 0.2s;
  }

  a:hover{
    background-color: white;
    color: black;
    outline: black 2px solid;
  }

  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 100px;
  }
</style>