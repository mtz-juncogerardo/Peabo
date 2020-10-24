<script lang="ts">
   import { onMount } from 'svelte';
   import { loading } from '../core/stores/loading.store';
   import Button_component from '../core/components/Button_component.svelte';
   import Singup from './Singup.svelte';
   import Login from './Login.svelte';

   let slidedSignUp = false;
   let slidedlogin = true;

   onMount(() => {
      setTimeout(() => loading.set(false), 600);
   })

   const toggleView = () => {
      slidedlogin = !slidedlogin;
      slidedSignUp = !slidedSignUp;
   };
</script>

<div class="wrapper">
  <div class="wrapper__login" class:slidedlogin>
    {#if slidedlogin}
      <Login />
    {:else}
      <p>Already a member?</p>
      <span>Just click the button below so you can Login</span>
      <Button_component text="Login" type="ghost" size="lg" on:click={toggleView}/>
    {/if}
  </div>

  <div class="wrapper__signup" class:slidedSignUp>
    {#if slidedSignUp}
      <Singup />
    {:else}
      <p>Hello, Friend!</p>
      <span>No account, dont worry just click the button below</span>
      <Button_component text="Sign up" type="ghost" size="lg" on:click={toggleView}/>
    {/if}
  </div>
</div>

<style lang="stylus">
  @import '../styles/variables'
  @import '../styles/mixins'

  .wrapper
    flex(row, center, space-between)
    height 100vh
    width 100vw

    &__login, &__signup
      flex(column, center, center)
      width(40%)
      transition all 1s
      padding 1.5rem
      text-align center
      height 100%

      p
        font-size 2.5rem
        font-family font-primary
        color bg
        font-weight 700
        margin-bottom 1.5rem

      span
        color bg
        margin-bottom 2rem

    &__login
      background primary

      &.slidedlogin
        width(60%)
        background bg

    &__signup
      background primary

      &.slidedSignUp
        width(60%)
        background bg
</style>
