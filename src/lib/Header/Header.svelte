<script>
  import playfair_logo from "./playfair_logo.svg";
</script>

<header>
  <div class="playfair-logo">
    <img src={playfair_logo} alt="Playfair" />
    <h1>Playfair</h1>
  </div>
  <div class="user">
    <!-- #TODO: -->
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
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  .playfair-logo{
    display: flex;
    align-items: center;
    flex-grow: 1;
  }

  .playfair-logo > img {
    width: 50px;
    height: 50px;
  }
</style>