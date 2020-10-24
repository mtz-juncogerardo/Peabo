<script lang="ts">
  import type { Dropdown } from '../../core/types/dropdown.type';
  import type { User } from '../../core/types/user.type';
  import { loading } from '../../core/stores/loading.store';
  import { user } from '../../core/stores/user.store';
  import Dropdown_component from '../../core/components/Dropdown_component.svelte';
  import _auth from '../../core/services/_auth';

  const currentUser: User = $user;
  let showDropdown = false;
  let dropdownItems: Dropdown[] = [
     {
        displayName: 'Profile',
        value: 'profile'
     },
     {
        displayName: 'Preferences',
        value: 'preferences'
     },
     {
        displayName: 'Sign Out',
        value: 'signOut'
     }
  ];

  const handleMenuOption = (e) => {
    if (e.detail.value === dropdownItems[0].value){
      console.log('Preferences');
      return;
    }

    if (e.detail.value === dropdownItems[1].value){
      console.log('Profile');
      return;
    }

    if (e.detail.value === dropdownItems[2].value){
      loading.set(true);
      _auth.logOut();
    }
  }
</script>

<div class="h-container">
  <div class="logo">PEABO</div>
  <div title={currentUser.name || currentUser.email} class="user" on:click={() => showDropdown = !showDropdown}>
    <p>{currentUser.name || currentUser.email}</p>
    <i class="fas fa-cat"></i>
    <i class="fas fa-sort-down icon-arrow"></i>

    {#if showDropdown}
      <Dropdown_component on:optionSelected={handleMenuOption} {dropdownItems}/>
    {/if}
  </div>
</div>

<style lang="stylus">
  @import '../../styles/variables'
  @import '../../styles/mixins'

  .h-container
    flex(row, flex-end, flex-start);
    padding 1rem 2.5rem
    border-bottom 1px solid extralight
    cursor pointer

  .logo
    color primary
    font-size 2.5rem
    min-width 210px
    letter-spacing -8px
    font-weight 700;
    line-height 1
    flex-grow 1

  .user
    flex(row, center, flex-end)
    position relative
    min-width 0

    p
      font-weight 600

      text-overflow ellipsis
      overflow hidden
      color secondary
      margin-right 1rem
      user-select none
      align-self flex-end

    i
      font-size 3rem
      margin-right 0.5rem
      color secondary

      &.icon-arrow
        font-size 0.875rem
</style>
