<template lang="pug">
  section.hero.is-light.is-bold
    .hero-head
      header.navbar
        .container
          .navbar-brand
            .navbar-item
              img(src="../../assets/soldai-logo.png")
          .navbar-end
            router-link.navbar-item(to="/") Buscar
            router-link.navbar-item(:to="{ name: 'about' }") Nosotros

    .hero-body
      .container.has-text-centered
        h1.title Chatbot Pokemón
        h2.subtitle Información sobre pokemons
</template>

<script>
</script>