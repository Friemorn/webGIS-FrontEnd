<template>
  <div>
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
      <div class="container">
        <a class="navbar-brand text-light" href="">webGIS</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav ml-auto">
            <router-link class="nav-item nav-link text-light home" to="/">Home</router-link>
            <router-link class="nav-item nav-link text-light point" to="/point">Point</router-link>
            <router-link class="nav-item nav-link text-light line" to="/line">Line</router-link>
            <router-link class="nav-item nav-link text-light polygon" to="/polygon">Polygon</router-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
.navbar {
  margin-bottom: 100px;
}
</style>
