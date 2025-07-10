<script>
	import { page } from '$app/state';
</script>

<div class="content" id="msg">
  <h1 class="is-size-1">
    <span id="code">{page.status}</span>
    {page.error.message}
  </h1>
  
  <div class="is-size-3 block">
    Sorry! Try again later. 😞
  </div>
  
  <div class="block is-size-3">
    <a href="/">home</a>
  </div>
</div>

<style>
  #msg {
    font-family: "Micro 5";
  }

  #code {
    font-weight: bolder;
  }
</style>
