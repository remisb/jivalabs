<template>
  <section id="app" class="hero is-fullheight" v-on:click="isActive = false">
    <div class="hero-head">
      <!-- navigation bar -->
      <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <!-- Jiva Labs logo-->
          <a class="navbar-item">
            <img src="./assets/jiva-labs-1.png" width="90" height="28">
          </a>
          <!-- /Jiva Labs logo-->

          <!-- nav bar burger visual representation of three lines in corner -->
          <a role="button" v-bind:class="[isActive ? 'is-active' : '', 'navbar-burger']" aria-label="menu" aria-expanded="false" data-target="navBarBurger" v-on:click.stop="changeIsActive">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
          <!-- /nav bar burger visual representation of three lines in corner -->
        </div>
        <!-- nav bar menu -->
        <div id="navBarBurger" v-bind:class="bindIsActive"> <!-- [isActive ? 'is-active' : '', 'navbar-menu'] -->
          <div class="navbar-start">
            <router-link to="/" class="navbar-item">About us</router-link>
            <router-link to="/technologicalStack" class="navbar-item">Technological Stack</router-link>
            <router-link to="/contactForm" class="navbar-item">Contact form</router-link>
          </div>
        </div>
        <!-- /nav bar menu -->
      </nav>
      <!-- /navigation bar -->
    </div>
    <div class="hero-body">
      <div class="container has-text-centered">
        <router-view/>
      </div>
    </div>
    <div class="hero-footer">

    </div>
  </section>
</template>

<script>
export default {
  data: function () {
    return {
      isActive: false
    }
  },
  computed: {
    bindIsActive: function () {
      if (this.isActive === true) {
        return 'is-active navbar-menu'
      } else {
        return 'navbar-menu'
      }
    }
  },
  methods: {
    changeIsActive: function () {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.navbar {
  background-color: rgb(255,255,255) !important;
}
</style>
