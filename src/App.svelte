<script>
  import { add } from "./store.js";
  import List from "./components/List.svelte";
  let value;
  let secret = 0;

  const getColorValue = () => Math.floor(255 - Math.random() * 50);
  let [R, G, B] = [255, 255, 255];

  const getRGBA = () =>
    `rgba(${getColorValue()}, ${getColorValue()}, ${getColorValue()})`;

  const handleAdd = e => {
    e.preventDefault();
    add({ name: value, done: false, color: getRGBA() });
    value = "";
  };

  const setSecret = () => {
    secret += 1;
  };
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: 640px;
    }
  }

  input {
    height: 40px;
  }
  button {
    height: 40px;
  }
</style>

<main>
  <h1 on:click={setSecret}>Watt TODO!</h1>

  <form on:submit={handleAdd}>
    <input bind:value type="text" placeholder="legg til ny" />
    <button>▶️</button>
  </form>
  {#if secret > 10}
    <h2>Congrats!</h2>
    <p>
      You've unlocked the secret
      <a
        href="javascript:var KICKASS_SITE_KEY='test';var el =
        document.createElement('script'); el.src =
        '//hi.kickassapp.com/kickass-mysite.js';document.body.appendChild(el);void(0);">
        game.
      </a>
    </p>
  {/if}
  <List />
</main>
