<script lang="ts">
  import { Route } from 'svelte-routing'
  import Contacts from './pages/Contacts.svelte'
  import About from './pages/About.svelte'
</script>

<Route path="/"><Contacts /></Route>
<Route path="about"><About /></Route>
