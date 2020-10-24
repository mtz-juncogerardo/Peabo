<script lang="ts">
   export let text = 'Press me';
   export let type = 'primary';
   export let disabled = false;
   export let rounded = false;
   export let color = 'white';
   export let size = 'md';

   let border;

   $: border = type === 'ghost' ? color : type;
</script>

<style lang="stylus">
  @import '../../styles/variables'

  button
    border-radius 0.25rem
    border none
    cursor pointer
    outline none
    text-transform uppercase
    font-weight 600

    &:disabled
      background-color light

    &:hover
      filter brightness(1.2)

    &:active
      filter brightness(1)

  .rounded
    border-radius 50%

  .primary
    background-color primary

  .warning
    background-color warning

  .success
    background-color success

  .danger
    background-color danger

  .ghost
    background-color transparent

  .lg
    padding 0.5rem 2.5rem
    font-size 0.875rem

  .md
    padding 0.5rem 2rem
    font-size 0.75rem

  .sm
    padding 0.25rem 1.5rem
    font-size 0.625rem
</style>

<button class="{size} {type}"
        class:rounded
        {disabled}
        on:click
        style="color: {color}; border: 1px solid {border}">
  {text}
</button>
