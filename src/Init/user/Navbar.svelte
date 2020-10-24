<script>
  import { createEventDispatcher } from 'svelte';
  import { slide } from 'svelte/transition';

  const dispatch = createEventDispatcher();


  const selectedItem = (item) => {
    dispatch('selectedItem', item.value)
  }

</script>

<div class="navbar">
    <div class="navbar__item"
         in:slide="{{delay: (i + 1) * 250}}"
         on:click={() => selectedItem()}>
      <i class=icon></i>
      <p>hello</p>
    </div>
</div>

<style lang="stylus">
  @import '../../styles/mixins'
  @import '../../styles/variables'

  .navbar
    flex(row, center, flex-start)

    &__item
      flex(row, center, flex-start)
      padding 2.5rem 0.25rem 1rem
      margin-right 2rem
      cursor pointer;

      &:last-child
        margin-right 0

      i, p
        color light
        font-weight 600
        transition all 0.5s;

      i
        margin-right 0.5rem
        font-size 1.5rem

      &--active
        border-bottom 4px solid primary

        i, p
          color secondary

</style>
