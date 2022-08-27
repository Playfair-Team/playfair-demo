<script>
  import github_logo from "./github_logo.png";
  import twitter_logo from "./twitter_logo.png";
  import playfair_logo from "./playfair_logo.svg";
</script>

<header>
  <div class="playfair-logo">
    <img src={playfair_logo} alt="Playfair" />
  </div>
  <div class="socials">
    <a href="https://twitter.com/join_playfair">
      <img src={twitter_logo} alt="Twitter" />
    </a>
    <a href="https://github.com/Playfair-Team">
      <img src={github_logo} alt="Github" />
    </a>
  </div>
</header>

<style>
	header {
		display: flex;
    justify-content: center;

    margin: 20px;
	}

  img {
    user-drag: none;
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  .playfair-logo{
    flex-grow: 1;
  }

  .playfair-logo > img {
    width: 50px;
    height: 50px;
  }

  .socials{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .socials > * > img{
    width: 30px;
    height: 30px;
    margin-left: 10px;
    margin-right: 10px;

    transition: 0.2s;
  }

  .socials > * > img:hover{
    opacity: 50%;
  }
</style>