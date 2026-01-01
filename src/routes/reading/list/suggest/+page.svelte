<script lang="ts">
  import ReadingHeader from "../../ReadingHeader.svelte";
</script>

<ReadingHeader />

<div class="block">
  <a href="/reading/list">
    <button class="button">back</button>
  </a>
</div>

<form id="suggest" class="form">
  <div class="field is-horizontal">
    <div class="field-body">
      <div class="field">
        <div class="control">
          <input class="input" id="title" name="title" type="text" placeholder="Title">
        </div>
      </div>
      <div class="field">
        <div class="control">
          <input class="input" id="author" name="title" type="text" placeholder="Author">
        </div>
      </div>
    </div>
  </div>
  <div class="field">
    <label class="label" for="url">URL to the book's deets (e.g., Amazon or publisher's website)</label>
    <div class="control">
      <input id="url" name="url" class="input" type="text">
    </div>
    <p class="help">Optional, but helps me grab the # of pages and its ISBN.</p>
  </div>
  <div class="field">
    <div class="control">
      <label class="label" for="fiction">
        Is this a work of fiction?
        <input type="checkbox" name="fiction" id="fiction">
      </label>
    </div>
  </div>
  <div class="field">
    <label class="label" for="who">Who are you? 🙂</label>
    <div class="control">
      <input required class="input" type="text" id="who" placeholder="Your name">
    </div>
  </div>
  <div class="field">
    <label class="label" for="email">Have an email for me?</label>
    <div class="control">
      <input class="input" type="text" id="email" placeholder="An email I can reach you at">
    </div>
  </div>
  <button disabled class="button is-primary">Submit</button>
  <p class="help">Sorry, this is a WIP! This form is not active yet.</p>
</form>

<style>
  @media(width >= 1000px) {
    #suggest {
      max-width: 60%;
    }
  }
</style>