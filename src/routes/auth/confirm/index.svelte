<script lang="ts">
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import { isMagicLink, signInWithMagicLink } from '$lib/firebase/client';
  import { clearMagicEmail, getMagicEmail } from '$lib/localStorage/magicEmail';
  import { goto } from '$app/navigation';
  import { setUser } from '$lib/stores/user';

  type FormState = 'validating' | 'idle' | 'loading' | Error;
  let state: FormState = 'idle';

  const login = async (magicEmail: string) => {
    state = 'loading';
    const email = magicEmail;

    try{
      const credential = await signInWithMagicLink(email, window.location.href);
      const token = await credential.user.getIdToken();

      const user = await fetch('/auth/session', {
        method: 'POST',
        headers: new Headers({Authorization: `Bearer ${token}`}),
      }).then(response => response.json())

      clearMagicEmail()

      setUser(user)

      goto('/dashboard')
    }catch{
      clearMagicEmail()

      state = new Error("Something went wrong. Please try again.")
    }
  }

  const handleSubmit: svelte.JSX.EventHandler<SubmitEvent, HTMLFormElement> = async ({ currentTarget }) => {
    const formInputEmail = new FormData(currentTarget).get('email') as string;

    login(formInputEmail)
  }

  onMount(() => {
    if(!isMagicLink(window.location.href)){
      state = new Error("Invalid magic link");
      return
    }

    const magicEmail = getMagicEmail();

    if(!magicEmail){
      state = 'idle'
      return
    }

    login(magicEmail)
  })
  
</script>

<div class="container" in:fade="{{ duration: 1000, delay: 200 }}">
  <h1>Confirm Log In</h1>
  {#if state == 'idle'}
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
  {:else if state == 'loading'}
    <p>Loading...</p>
  {:else if state == 'validating'}
    <p>Validating magic link...</p>
  {:else if state instanceof Error}
    <p>Error: {state.message}</p>
  {:else}
    <p in:fade="{{ duration: 1000, delay: 200 }}">Submitted! Please check your email.</p>
  {/if}
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

  p{
    font-size: 1.2em;
    margin: 35px;
    font-weight: 300;

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