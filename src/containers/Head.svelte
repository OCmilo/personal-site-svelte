<script lang="ts">
  import siteMetaData from '../constants/siteMetaData'
</script>

<svelte:head>
  <title>{siteMetaData.siteTitle}</title>
  <meta name="description" content={siteMetaData.siteDescription} />
  <meta name="robots" content="index, follow" />
  <meta property="og:title" content={`${siteMetaData.siteTitle}`} />
  <meta property="og:site_name" content="Camilo Carneiro" />
  <meta property="og:description" content={siteMetaData.siteDescription} />
  <!-- TODO: add image -->
</svelte:head>
