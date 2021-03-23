<script lang="ts">
  import { fly, blur } from 'svelte/transition'
  import { elasticOut, quintIn } from 'svelte/easing'
  import FaGithub from 'svelte-icons/fa/FaGithub.svelte'
  import FaTwitter from 'svelte-icons/fa/FaTwitter.svelte'
  import FaLinkedinIn from 'svelte-icons/fa/FaLinkedinIn.svelte'
  import FaEnvelope from 'svelte-icons/fa/FaEnvelope.svelte'
  import siteMetaData from '../constants/siteMetaData'

  const iconRelations = [
    {
      icon: FaEnvelope,
      label: 'E-mail',
      link: `mailto:${siteMetaData.social.email}`,
      isLabelVisible: false,
    },
    {
      icon: FaTwitter,
      label: 'Twitter',
      link: siteMetaData.social.twitter,
      isLabelVisible: false,
    },
    {
      icon: FaGithub,
      label: 'Github',
      link: siteMetaData.social.github,
      isLabelVisible: false,
    },
    {
      icon: FaLinkedinIn,
      label: 'LinkedIn',
      link: siteMetaData.social.linkedin,
      isLabelVisible: false,
    },
  ]
</script>

<div class="contacts_wrapper">
  {#each iconRelations as relation (relation.label)}
    <a
      class="link"
      href={relation.link}
      target="_blank"
      rel="noreferrer noopener"
    >
      <figure class="figure">
        <div
          class="icon"
          on:mouseover={() => (relation.isLabelVisible = true)}
          on:mouseout={() =>
            setTimeout(() => (relation.isLabelVisible = false), 2000)}
        >
          <svelte:component this={relation.icon} />
        </div>
        {#if relation.isLabelVisible}
          <figcaption
            in:fly={{
              x: -40,
              duration: 1200,
              easing: elasticOut,
            }}
            out:blur={{
              easing: quintIn,
            }}
            class="caption"
          >
            {relation.label}
          </figcaption>
        {/if}
      </figure>
    </a>
  {/each}
</div>

<style lang="scss">
  .contacts_wrapper {
    display: grid;
    height: 100%;
    row-gap: 2rem;
    padding: 1rem 0;
    align-content: flex-end;
    margin-left: 3rem;
  }

  .link {
    display: block;

    &:link,
    &:visited {
      color: currentColor;
      text-decoration: none;
    }
  }

  .figure {
    display: grid;
    position: relative;
    margin: 0;
    transition: transform 0.1s;
    backface-visibility: hidden;

    &:hover {
      transform: scale(1.2);
    }
  }

  .icon {
    width: 3rem;
    height: 3rem;
    transform: rotate(-90deg);
  }

  .caption {
    position: absolute;
    font-size: large;
    white-space: nowrap;
    left: 100%;
    top: 15%;
  }
</style>
