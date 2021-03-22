<div class="layout">
  <div class="inner_layout">
    <aside>
      <slot name="aside" />
    </aside>
    <header>
      <slot name="header" />
    </header>
    <main>
      <slot />
    </main>
  </div>
</div>

<style>
  .layout {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    padding-left: 30vw;
  }

  .inner_layout {
    display: grid;
    grid-template-areas:
      'aside header'
      'aside main';
    grid-template-rows: max-content 1fr;
    grid-template-columns: max-content 1fr;
    align-items: center;
  }

  aside {
    grid-area: aside;
  }

  header {
    grid-area: header;
  }

  main {
    grid-area: main;
  }
</style>
