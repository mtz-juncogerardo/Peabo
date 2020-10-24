<script>
  import Dashboard from './Dashboard.svelte';
  import Wallet from './Wallet.svelte';
  import Categories from './Categories.svelte';
</script>

<div class="v-container">
  <div class="view">
      <Dashboard />

      <Wallet />

      <Categories />
  </div>
</div>

<style lang="stylus">
  @import '../../../styles/variables'

  .v-container
    //165 px is the Navbar + Header height
    height calc(100vh - 165px)
    padding 1.5rem
    background bg

  .view
    height 100%
    width 100%
    box-shadow shadow-2
    border-radius 0.5rem
    background extralight

  h1
    font-size 3rem
    text-align center

</style>
