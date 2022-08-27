<script>
  import screenshot from "../assets/landing_screenshot.png";
</script>

<div class="container">
  <h1>PLAYFAIR</h1>
  <h2>A humane notebook interface.</h2>
  <div class="row">
    <div class="column">Model mathematical systems while writing <span>no code</span></div>
    <div class="column">Complete reports with <span>zero context-switching</span></div>
    <div class="end-column">Fully <span>replace paper</span> as your go-to for mathematical work</div>
  </div>
  <button>LOG IN</button>
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

  button{
    background-color: black;
    color: #fff;
    font-family: Jost;
    border: none;
    padding: 10px 20px;
    font-size: 1.2em;
    font-weight: 300;
    margin-top: 20px;
    cursor: pointer;

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

    padding-top: 25px;
  }

  .column {
    float: left;
    width: 30%;
    height: 100%;
    padding-left: 25px;
    padding-right: 25px;
    font-size: 1.5em;
    font-weight: 200;
    border-right: rgb(215, 215, 215) 2.5px solid;
  }

  .end-column{
    float: left;
    width: 30%;
    height: 100%;
    padding-left: 25px;
    padding-right: 25px;
    font-size: 1.5em;
    font-weight: 200;
  }

  .row{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 50px;
    max-width: 800px;
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
</style>
