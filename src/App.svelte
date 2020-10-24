<script lang="ts">
   import { onMount } from 'svelte';
   import { loading } from './core/stores/loading.store';
   import { user } from './core/stores/user.store';
   import Loader_trigger from './core/triggers/Loader_trigger.svelte';
   import Alert_trigger from './core/triggers/Alert_trigger.svelte';
   import User from './Init/user/User.svelte';
   import Init from './Init/Init.svelte';
   import _ from 'lodash';

   onMount(() => {
      loading.set(true);
   })
</script>

<Alert_trigger/>
<Loader_trigger/>

{#if _.isEmpty($user)}
  <Init/>
{:else}
  <User/>
{/if}


<style lang="stylus">
  @import './styles/variables'
  @import './styles/mixins'

  // GLOBAL STYLES
  :global(*)
    box-sizing border-box
    text-decoration none
    font-family font-secondary
    font-size 1rem
    color text
    margin 0
    padding 0
</style>
