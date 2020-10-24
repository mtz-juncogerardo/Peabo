<script>
  import { fade, fly } from 'svelte/transition';
  import { error } from '../stores/error.store';
  import { loading } from '../stores/loading.store';
  import Button_component from '../components/Button_component.svelte';
  import _ from 'lodash';

  export let message = '';
  const flyTransition = {
    y: -200,
    duration: 500
  }

  error.subscribe(data => {
    if (_.isEmpty(data)) return;

    setTimeout(() => loading.set(false), 500);
    message = data;
  });

  const closeAlert = () => {
    message = '';
    error.set('');
  }
</script>

{#if message && !$loading}
  <div class="overlay" on:click={closeAlert}></div>

  <div in:fly={flyTransition} out:fade class="alert-box">
    <h1>{ message }</h1>
    <Button_component on:click={closeAlert} text="Close" size="lg"/>
  </div>
{/if}

<style lang="stylus">
  @import '../../styles/variables.styl';
  @import '../../styles/mixins.styl';

  overlay-index = 100
  box-height = 320px
  box-width = 540px

  .overlay
    position absolute
    background rgba(0, 0, 0, 0.5)
    z-index overlay-index
    height 100vh
    width 100vw


  .alert-box
    flex(column, center, flex-start)
    padding 1.5rem
    box-shadow shadow-2
    border-radius 0.5rem
    position absolute
    top 'calc(50% - (%s/2))' % box-height
    left 'calc(50% - (%s/2))' % box-width
    width box-width
    height box-height
    background white
    z-index 'calc(%s + 1)' % overlay-index

    h1
      text-align center
      color black
      font-size 2.5rem
      margin-bottom auto

</style>
