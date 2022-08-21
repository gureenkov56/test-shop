<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>
import {mapActions} from "vuex";

export default {
  methods: {
    ...mapActions(['getProducts']),
  },
  created() {
    this.getProducts()
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;500;700;900&display=swap');

/* global styles */
html, body {
  margin: 0;
  background-color: #151515;
}

* {
  font-family: 'Montserrat', sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  color: #EA983C;
}

.fade-enter-active,
.fade-leave-active {
  transition: all .3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.d-none {
  display: none;
}

.opacity-0 {
  opacity: 0;
}

.hidden {
  visibility: hidden;
  opacity: 0;
}

a {
  text-decoration: none;
}

.btn {
  background: rgba(0, 0, 0);
  border: 2px solid #fff;
  color: #fff;
  cursor: pointer;
  text-transform: uppercase;
}

.notice {
  background-color: #40a823;
  color: white;
  max-width: 400px;
  margin: 10px auto;
  border: 2px solid white;
  overflow: hidden;
  position: relative;

  max-height: 250px;

  transition: max-height .5s 0s,
              max-width .5s .5s,
              opacity .5s .5s;
}

.notice__inner {
  padding: 20px;
}

.notice__inner > h5,
.notice__inner > p {
  margin: 0;
  color: white;
}

.notice > button {
  border: none;
  background: transparent;
  color: white;
  font-size: 2rem;
  width: 46px;
  cursor: pointer;

  position: absolute;
  top: 0;
  right: 0;
}

.notice.hide {
  max-height: 0;
  max-width: 0;
  opacity: 0;
}

.loading {
  text-align: center;
  color: white;
  height: 300px;
  line-height: 300px;
}

.text-center {
  text-align: center;
}

* {
  color: white;
}

.wrapper {
  max-width: 800px;
  margin: 0 auto 100px auto;
  padding: 0 10px;
}

</style>
