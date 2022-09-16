<template>
  <footer>
    <div class="footer__wrapper">
      <button class="backBtn" @click="$router.back()">
        <img src="@/assets/images/svg/arrow-left.svg" alt="arrow-back">
      </button>
      <div>
        <router-link to="/cart">
          ЗАКАЗ: ${{ totalCartPrice }}
        </router-link>
      </div>
      <div class="footer__user">
        <router-link to="/profile">
          <img src="@/assets/images/svg/user.svg" alt="user">
        </router-link>
      </div>
    </div>
  </footer>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "FooterPart",
  computed: {
    ...mapGetters(['totalCartPrice'])
  },
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

a {
  color: white;
}

.backBtn {
  background-color: #000;
  border: none;
  cursor: pointer;
}

.footer__user {
  width: 22px;
  align-self: center;
}
</style>