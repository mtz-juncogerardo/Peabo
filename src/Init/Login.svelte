<script lang="ts">
   import { loading } from '../core/stores/loading.store';
   import Input_component from '../core/components/Input_component.svelte';
   import Button_component from '../core/components/Button_component.svelte';
   import _auth from '../core/services/_auth';

   export let passwordValid: boolean;

   export let password = '';
   export let email = '';

   $: passwordValid = password.length >= 8;

   const emailLogin = () => {
      if (!email || !passwordValid) return;

      loading.set(true);
      _auth.emailAuth(email, password);
   };

   const facebookLogin = () => {
      loading.set(true);
      _auth.facebookAuth();
   };

   const googleLogin = () => {
      loading.set(true);
      _auth.googleAuth();
   };

</script>

<div class="login">
  <p>Login to start</p>
  <div class="login__social">
    <div class="login__social__item" on:click={facebookLogin}>
      <i class="fab fa-facebook-f"></i>
    </div>
    <div class="login__social__item" on:click={googleLogin}>
      <i class="fab fa-google"></i>
    </div>
  </div>
  <span>or use your email for login</span>

  <div class="login__input">
    <Input_component bind:value={email}
                     icon="far fa-envelope"
                     placeholder="Enter your email"/>
  </div>

  <div class="login__input">
    <Input_component bind:value={password}
                     icon="fas fa-shield-alt"
                     placeholder="Enter your password"
                     type="password"/>
  </div>

  <Button_component disabled={!passwordValid || !email}
                    size="lg"
                    text="Login"
                    on:click={emailLogin}/>
</div>

<style lang="stylus">
  @import '../styles/variables'
  @import '../styles/mixins'

  .login
    flex(column, center, center)
    width 100%
    padding 2.5rem

    p
      font-weight 700
      font-family font-primary
      font-size 2rem
      color primary
      margin-bottom 1.5rem

    span
      color light;
      margin-bottom 1.5rem

    &__social
      flex(row, center, center)
      margin-bottom 1rem

      &__item
        wh(3rem)
        flex(row, center, center)
        border 2px solid primary
        border-radius 50%
        margin-right 1rem
        cursor pointer

        &:last-child
          margin-right 0

        i
          font-size 1.5rem
          color primary


    &__input
      margin-bottom 1rem;

      &:last-child
        margin-bottom 0
</style>
