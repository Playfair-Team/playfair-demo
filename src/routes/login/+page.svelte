<script lang="ts">
  const handleSubmit: svelte.JSX.EventHandler<SubmitEvent, HTMLFormElement> = () => {}
</script>

<div class="container">
  <h1>Log In</h1>
  <form on:submit|preventDefault={handleSubmit}>
    <input 
      name="email" 
      placeholder="name@email.com"
      type="email"
      aria-label="email"
      required
    />
    <button>SUBMIT</button>
  </form>
</div>

<style>
  h1{
    font-size: 2.5em;
    margin: 0;
    font-weight: 200;
    letter-spacing: 5px;

    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  form{
    display: flex;
    align-items: center;
    padding: 25px;
  }

  input{
    width: 100%;
    padding: 10px;
    margin: 10px;
    border: 1px solid #ccc;
    font-family: 'Jost', Courier, monospace;
    font-size: 1.2em;
    font-weight: 300;
    border: 2px solid rgb(247, 247, 247);

    transition: 0.2s;
  }

  input:focus{
    outline: none;
    border: 2px solid rgb(219, 219, 219);
  }

  button{
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

  button:hover{
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