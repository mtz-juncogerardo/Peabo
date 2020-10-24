<script lang="ts">
   import type { Dropdown } from '../types/dropdown.type';
   import { createEventDispatcher } from 'svelte';

   export let dropdownItems: Dropdown[] = [];

   const dispatch = createEventDispatcher();
   const itemClick = (item) => dispatch('optionSelected', item);
</script>

<style lang="stylus">
  @import '../../styles/variables'
  @import '../../styles/mixins'

  box-width = 12rem

  .d-container
    width(box-width)
    padding 0.5rem
    background bg
    position absolute
    top: calc(100% + 0.5rem)
    box-shadow shadow-2
    border-radius 0.5rem

  .item
    padding 0.5rem
    border-radius 0.25rem
    margin-bottom 0.5rem

    &:last-child
      margin-bottom 0

    &:hover
      background extralight
      font-weight 600

</style>

<div class="d-container">
  {#each dropdownItems as item}
    <div class="item" on:click={() => itemClick(item)}>{ item.displayName }</div>
  {/each}
</div>
