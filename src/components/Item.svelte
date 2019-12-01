<script>
  let handler;

  const getColorValue = () => Math.floor(255 - Math.random() * 50);
  let [R, G, B] = [255, 255, 255];

  const setRGB = () => {
    [R, G, B] = [getColorValue(), getColorValue(), getColorValue()];
  };
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

<li class="item" on:mouseenter={setRGB} style="background: rgb({R}, {G}, {B})">
  <slot />
</li>
