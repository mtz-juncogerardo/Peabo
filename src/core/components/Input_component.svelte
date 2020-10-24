<script lang="ts">
   export let placeholder: string;
   export let value: string;
   export let icon: string;
   export let type = 'text';

   const handleInput = (event) => {
      value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
   };
</script>

<style lang="stylus">
  @import '../../styles/variables'
  @import '../../styles/mixins'

  .input
    flex(row, center, space-between)
    padding 0.75rem 1rem
    background extralight
    border-radius 0.25rem
    min-width 20rem

    i
      margin-right 1rem
      color light

    input
      border none
      background transparent
      width 100%
      padding 0
      margin 0

      &:focus
        border none
        outline none

</style>

<div class="input">
  <i class={icon}></i>
  <label>
    <input on:focus on:blur on:change={handleInput} on:input={handleInput} {placeholder} {type} {value}>
  </label>
</div>
