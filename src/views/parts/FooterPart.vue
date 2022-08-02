<template>
  <footer>
    <div class="footer__wrapper">
      <router-link to="/">
        <div>
          <img src="@/assets/images/svg/arrow-left.svg" alt="arrow-back">
        </div>
      </router-link>
      <div>
        ЗАКАЗ: ${{totalCartPrice}}
      </div>
      <div>
        <img src="@/assets/images/svg/user.svg" alt="user">
      </div>
    </div>
  </footer>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "FooterPart",
  computed: {
    ...mapGetters(['totalCartPrice'])
  }
}
</script>

<style scoped>
footer {
  background-color: #000;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;

  color: white;
}

.footer__wrapper {
  display: flex;
  max-width: 800px;
  margin: 0 auto;
}

.footer__wrapper > * {
  flex: 1;
  text-align: center;
  padding: 15px;
  padding-top: 18px;
  margin: 5px;
  vertical-align: center;
}
</style>