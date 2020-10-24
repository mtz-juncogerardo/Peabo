<script>
  import { onMount } from 'svelte';
  import { loading } from '../../core/stores/loading.store';
  import Header from './Header.svelte';
  import Navbar from './Navbar.svelte';
  import View from './View/View.svelte';
  import { user } from '../../core/stores/user.store';

  onMount(() => {
    setTimeout(() => loading.set(false), 600);
    console.log($user);
  })
</script>


<div class="container">
<Header/>
 <!-- <Navbar on:selectedItem={handleMenu}/>-->
</div>

