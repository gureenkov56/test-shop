<template>
  <header>
    <router-link to="/">
      <img src="@/assets/images/logo-2.png" alt="logo" id="headerLogo">
    </router-link>
  </header>
</template>

<script>
export default {
  name: "HeaderPart"
}
</script>

<style scoped>
header {
  padding: 10px;
}

#headerLogo {
  width: 100px;
  display: block;
  margin: 10px auto;
}
</style>