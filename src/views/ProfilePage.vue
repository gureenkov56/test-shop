<template>
  <div>
    <HeaderPart/>
    <div class="profile-wrapper">
      <div v-if="!user" class="text-center">
        <h2>Вы не авторизованы</h2>
        <p>Войдите, чтобы копить и тратить е-баллы</p>
        <router-link to="/auth">
          <button class="btn">Войти</button>
        </router-link>
      </div>

      <div v-else>
        <div class="text-center">
          <img src="http://biographe.ru/wp-content/uploads/2018/01/2-103.jpg" alt="avatar" class="avatar">
          <h2>Полковник Сандерс</h2>
          <p>Е-баллов: 24</p>
        </div>

        <h3>Прошлые заказы</h3>
        <div class="order">
          <div class="order-header">
            <h4>Номер заказа 34</h4>
            <div class="status status-in-progress"></div>
          </div>
          <p>Сумма заказа 1230 р.</p>
          <p>Получено 3 е-балла, потрачено 0.</p>
        </div>

        <div class="order">
          <div class="order-header">
            <h4>Номер заказа 34</h4>
            <div class="status status-return"></div>
          </div>
          <p>Сумма заказа 1230 р.</p>
          <p>Получено 3 е-балла, потрачено 0.</p>
        </div>

        <div class="order">
          <div class="order-header">
            <h4>Номер заказа 34</h4>
            <div class="status status-done"></div>
          </div>
          <p>Сумма заказа 1230 р.</p>
          <p>Получено 3 е-балла, потрачено 0.</p>
        </div>
      </div>

    </div>
    <FooterPart/>
  </div>
</template>

<script>
import FooterPart from "@/views/parts/FooterPart";
import HeaderPart from "@/views/parts/HeaderPart";

export default {
  name: 'ProfilePage',
  components: {
    FooterPart, HeaderPart
  },
  computed: {
    user() {
      return this.$store.state.user
    }
  }
}
</script>

<style>
.profile-wrapper {
  max-width: 800px;
  margin: 0 auto 80px auto;
  color: white;
  padding: 10px;

}

.avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 0 auto;

  object-fit: cover;
}

.order {
  background-color: rgba(0, 0, 0, .4);
  padding: 5px 10px;
  border-radius: 20px;
  margin-bottom: 1rem;
}

.order-header {
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
}

h4 {
  margin: 0;
}

.status {
  border-radius: 5px;
  padding: 3px 10px;
  min-width: 110px;
  text-align: center;
}

.status-done {
  background-color: green;
}

.status-in-progress {
  background-color: #d2bf00;
}

.status-return {
  background-color: orangered;
}

.status-done::before {
  content: "Выдан";
}

.status-return::before {
  content: "Отменен";
}

.status-in-progress::before {
  content: "Ожидается";
}


</style>

