<script lang="ts">
  let { img, title, subtitle, alt = "" } = $props();

  const preload = async (src) => {
    const resp = await fetch(src);
    const blob = await resp.blob();
  
    return new Promise(function (resolve, reject) {
      let reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };
</script>

{#await preload(img)}
  <div class="openerWait mb-2 skeleton-block">
  </div>
{:then base64} 
  <div class="opener mb-2">
    <img class="openerImg" src="{base64}" alt={alt} title={alt}>
    <span class="openerTitle">{title}</span>
    <span class="openerSubtitle">{subtitle}</span>
  </div>
{/await}

<style>
  .openerWait, .opener {
    position: relative;
    width: 100%;
  }

  .openerTitle {
    position: absolute;
    bottom: 25px;
    left: 10px;
    color: #E1EFE6;
    padding: 10px;
    font-weight: bold;
  }

  .openerSubtitle {
    position: absolute;
    bottom: 0px;
    left: 10px;
    color: #E1EFE6;
    padding-bottom: 2px;
    padding-left: 10px;
  }

  @media (width <= 1000px) {
    .openerWait {
      min-height: 25vh;      
    }
    .openerTitle {
      font-size: 3rem;
    }
    .openerSubtitle {
      font-size: 1.5rem;
    }
  }

  @media (width > 1000px) {
    .openerWait {
      min-height: 50vh;
    }
    .openerTitle {
      font-size: 6rem;
    }
    .openerSubtitle {
      font-size: 3rem;
    }
  }

  .openerImg {
    position: relative;
    width: 100%; /* Ensure image fills the container width */
    height: auto;
    display: block; /* Removes extra space below the image */
  }
</style>
