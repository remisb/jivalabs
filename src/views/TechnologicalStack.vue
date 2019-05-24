<template>
  <section class="section">
    <div class="container">
      <div class="columns is-mobile is-multiline is-vcentered">
        <div
          class="column is-half-mobile is-one-third-tablet is-one-quarter-desktop is-one-fifth-widescreen"
          v-for="item in logosArray"
          :key="item"
        >
          <article class="media notification has-background-white">
            <div class="media-content">
              <div class="content">
                <img v-bind:src="'/images/'+ item" alt>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'myapp',
  data: function () {
    return {
      logosArray: ['vuejs.png', 'bulma-logo.png', 'Go.png', 'pwa.png', 'amp.png', 'mongo.jpg', 'java.png', 'mysql.png', 'docker.png']
    }
  }
}
</script>

<style>
</style>
