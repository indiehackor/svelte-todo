<script>
  import Item from "./Item.svelte";
  export let items;

  export function handleDelete(item) {
    items = items.filter(i => i !== item);
    console.log(items.length);
  }
</script>

<style>
  ul {
    list-style-type: none;
    padding: 0;
  }

  button {
    background: transparent;
    border: none;
  }
  input,
  button {
    margin: 0;
  }
</style>

<ul>
  {#each items as item}
    <Item>
      <div>
        <button on:click={() => handleDelete(item)} class="delete">⛔️</button>
        <span>{item.name}</span>
      </div>
      <input type="checkbox" bind:checked={item.done} />
    </Item>
  {/each}
</ul>
