<script>
  import { onDestroy } from "svelte";
  import { items, remove } from "../store.js";
  import Item from "./Item.svelte";
  let updatedItems;

  const handleDelete = item => {
    remove(item);
  };

  const unsubscribe = items.subscribe(update => {
    updatedItems = update;
  });

  onDestroy(unsubscribe);
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
  {#each updatedItems as item}
    <Item color={item.color}>
      <div>
        <button on:click={() => handleDelete(item)} class="delete">⛔️</button>
        <span>{item.name}</span>
      </div>
      <input type="checkbox" bind:checked={item.done} />
    </Item>
  {/each}
</ul>
