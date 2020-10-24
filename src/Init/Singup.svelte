<script lang="ts">
   import { loading } from '../core/stores/loading.store';
   import Input_component from '../core/components/Input_component.svelte';
   import Button_component from '../core/components/Button_component.svelte';
   import _auth from '../core/services/_auth';

   let confirmPasswordVisited: boolean;
   let passwordVisited: boolean;
   let passwordMatches: boolean;
   let passwordLarge: boolean;
   let passwordValid: boolean;
   let disabled: boolean;

   let confirmPassword = '';
   let password = '';
   let email = '';

   $: disabled = !email || !passwordValid;
   $: {
      passwordValid = passwordLarge && passwordMatches;
      passwordMatches = confirmPassword === password;
      passwordLarge = password.length >= 8;
   }

   const emailSignup = () => {
      if (!passwordValid) return;

      loading.set(true);
      _auth.emailAuth(email, password);
   };

   const googleLogin = () => {
      loading.set(true);
      _auth.googleAuth();
   };

   const facebookLogin = () => {
      loading.set(true);
      _auth.facebookAuth();
   };

</script>

<div class="signup">
  <p>Sign up with your accounts</p>
  <div class="signup__social">
    <div class="signup__social__item" on:click={facebookLogin}>
      <i class="fab fa-facebook-f"></i>
    </div>
    <div class="signup__social__item" on:click={googleLogin}>
      <i class="fab fa-google"></i>
    </div>
  </div>
  <span>or fill the form below</span>

  <div class="signup__input">
    <Input_component bind:value={email}
                     icon="far fa-envelope"
                     placeholder="Enter your email"/>
  </div>

  <div class="signup__input">
    <Input_component on:blur={() => passwordVisited = true}
                     bind:value={password}
                     icon="fas fa-shield-alt"
                     placeholder="Enter your password"
                     type="password"/>

    {#if !passwordLarge && passwordVisited}
      <div class="signup__invalid">Password should be 8 characterers at least</div>
    {/if}
  </div>

  <div class="signup__input">
    <Input_component on:blur={() => confirmPasswordVisited = true}
                     bind:value={confirmPassword}
                     icon="fas fa-shield-alt"
                     placeholder="Confirm your password"
                     type="password"/>

    {#if !passwordValid && confirmPasswordVisited}
      <div class="signup__invalid">Your password doesn't match</div>
    {/if}
  </div>

  <Button_component on:click={emailSignup}
                    {disabled}
                    size="lg"
                    text="Sign Up"/>
</div>

<style lang="stylus">
  @import '../styles/variables'
  @import '../styles/mixins'

  .signup
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

    &__invalid
      margin-top 0.5rem
      color danger
      font-size 0.875rem
      text-align left
</style>
