<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>

import HomePage from "@/views/HomePage";
export default {
  components: {HomePage}
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

</style>
