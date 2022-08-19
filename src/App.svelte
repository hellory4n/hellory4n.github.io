<script>
  import Navbar from "./lib/Navbar.svelte";
</script>

<main>
  <div class="me-do-the-swing">
    <h1 class="hellory4n">hellory4n</h1>
  </div>
  <p class="professional-idiot">Professional Idiot</p>

  <Navbar/>
</main>

<style>
  .me-do-the-swing {
    animation: swing ease-in-out 2.5s infinite alternate;
    transform-origin: center -20px;
  }

  @keyframes swing {
    0% { transform: rotate(5deg); }
    100% { transform: rotate(-5deg); }
  }

  .hellory4n {
    font-size: 48px;
    text-shadow: 1px 1px 1px black;
  }

  .professional-idiot {
    margin-bottom: 25px;
  }
</style>
