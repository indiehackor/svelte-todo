<script>
  export let color;
</script>

<style>
  .item {
    border: 1px solid #ccc;
    border-radius: 3px;
    height: 40px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    transition: background 300ms;
  }
</style>

<li class="item" style="background: {color}">
  <slot />
</li>
