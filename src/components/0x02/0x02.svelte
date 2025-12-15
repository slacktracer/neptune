<script lang="ts">
  import { onMount } from "svelte";

  import { boot } from "./boot";

  let wrapper: HTMLDivElement;

  onMount(() => {
    boot({ node: wrapper });
  });
</script>

<div id="component0x01">
  <div id="wrapper" bind:this={wrapper}></div>
</div>

<style>
  #component0x01 {
    display: grid;
    height: 100dvh;
    place-content: center;
  }
</style>
