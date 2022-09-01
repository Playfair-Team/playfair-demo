<script>
  import LandingHeader from "$lib/LandingHeader/LandingHeader.svelte";
  import screenshot from "../assets/landing_screenshot.png";
</script>

<LandingHeader />
<div class="container">
  <h1>PLAYFAIR</h1>
  <h2>A humane notebook interface.</h2>
  <div class="row">
    <div class="column">Model mathematical systems while writing <span>no code</span></div>
    <div class="column">Complete reports with <span>zero context-switching</span></div>
    <div class="end-column">Fully <span>replace paper</span> for casual mathematical work</div>
  </div>
  <a class="login" href="/login">LOG IN</a>
  <div class="screenshot">
    <img src={screenshot} alt="Preview" />
  </div>
  <footer>
    Copyright © 2022 Playfair Team. All rights reserved.
  </footer>
</div>

<style>
  h1 {
    font-size: 5.7em;
    margin: 0;
    font-weight: 200;
    letter-spacing: 5px;
    margin-bottom: -10px;

    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  h2 {
    font-size: 2.1em;
    margin: 0;
    font-weight: 200;
    color: rgb(84, 84, 84);

    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  span{
    font-weight: 300;
  }

  footer {
    width: 100%;
    padding-top: 15px;
    padding-bottom: 15px;
    font-weight: 300;
    color: rgb(84, 84, 84);
    font-size: 0.9em;
    text-align: center;

    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;

    padding: 25px;
    padding-bottom: 0;
  }

  .column, .end-column {
    float: left;
    width: 30%;
    height: 100%;
    padding-left: 25px;
    padding-right: 25px;
    font-size: 1.5em;
    font-weight: 200;
  }

  .column{
    border-right: rgb(215, 215, 215) 2.5px solid;
  }

  .row{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 50px;
    max-width: 800px;
  }

  .login{
    background-color: black;
    color: #fff;
    font-family: Jost;
    border: none;
    padding: 10px 20px;
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

  .login:hover{
    background-color: white;
    color: black;
    outline: black 2px solid;
  }

  .screenshot{
    margin-top: 50px;
    margin-bottom: 50px;
    max-width: 800px;
    height: auto;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }

  .screenshot > img{
    width: 100%;
    height: 100%;
  }

  /* Mobile */
  @media (max-width: 500px) {
    h1{
      font-size: 4.2em;
    }
    h2{
      font-size: 1.7em;
    }
    .column, .end-column {
      font-size: 1.1em;
    }
    .row{
      margin: 65px;
      margin-left: 0;
      margin-right: 0;
    }
    .screenshot{
      margin-bottom: 25px;
    }
  }
</style>
