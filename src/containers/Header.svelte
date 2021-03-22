<script lang="ts">
  import { Link } from 'svelte-routing'
  import navigation from '../constants/navigation'
</script>

<nav>
  <ul>
    {#each navigation as nav (nav.name)}
      <li>
        <Link class="link" to={nav.path}>
          {nav.name}
        </Link>
      </li>
    {/each}
  </ul>
</nav>

<style lang="scss">
  ul {
    display: flex;
  }

  li:not(:first-child) {
    margin-left: 2rem;
  }

  .link {
    font-size: large;
    text-decoration: none;
    color: currentColor;
  }
</style>
