<script>
  export let phrase;
</script>

<div class="typing" style="--numchar:20">{phrase}</div>

<style>
  .typing {
    animation: typing 1.5s steps(20, end), blink .75s step-end infinite alternate;
    overflow: hidden;
    white-space: nowrap;
  }

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 20ch;
    }
  }
</style>
