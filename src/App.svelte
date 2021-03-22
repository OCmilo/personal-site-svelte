<script lang="ts">
  import { Router } from 'svelte-routing'
  import Routes from './Routes.svelte'
  import Layout from './Layout.svelte'
  import Head from './containers/Head.svelte'
  import Header from './containers/Header.svelte'
  import InfoDisplay from './components/InfoDisplay.svelte'
</script>

<Head />
<Router>
  <Layout>
    <Header slot="header" />
    <InfoDisplay slot="aside" />
    <Routes />
  </Layout>
</Router>

<style global>
  .layout {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  html,
  body,
  main {
    width: 100%;
    height: 100%;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ol,
  ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  ol,
  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }
</style>
