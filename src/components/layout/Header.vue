<template lang="pug">
  section.hero.is-light.is-bold
    .hero-head
      header.navbar
        .container
          .navbar-brand
            .navbar-item
              img(src="../../assets/soldai-logo.png")
          .navbar-end
            router-link.navbar-item(to="/") Información
    .hero-body
      .container.has-text-centered
        img(src="../../assets/pokemon-pikachu-png.png")
        h2.subtitle ChatBot Pokémon
</template>

<script>
</script>