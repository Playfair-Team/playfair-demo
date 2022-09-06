<script>
  import playfair_logo from "./playfair_logo.svg";
</script>

<header>
  <div class="playfair-logo">
    <a href="/">
      <img src={playfair_logo} alt="Playfair" />
      <h1>Playfair Demo</h1>
    </a>
  </div>
  <div class="user">
  
  </div>
</header>

<style>
	header {
		display: flex;
    justify-content: center;

    margin: 20px;
	}

  h1{
    font-size: 1.5rem;
    font-weight: 300;
    margin: 0;

    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  img {
    width: 50px;
    height: 50px;

    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  a{
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #000;
    max-width: fit-content;
  }

  .playfair-logo{
    flex-grow: 1;
  }

  .user{
    display: flex;
    align-items: center;
  }
</style>