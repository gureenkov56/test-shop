<template>
  <div>
    <HeaderPart/>
    <div class="profile-wrapper">
      <div v-if="!user" class="text-center">
        <h2>Вы не авторизованы</h2>
        <p>Войдите, чтобы копить и тратить баллы</p>
        <router-link to="/auth">
          <button class="btn">Войти</button>
        </router-link>
      </div>

      <div v-else>
        <div class="text-center">
          <img :src="user.avatarSrc" alt="avatar" class="avatar">
          <h2>{{ user.name }}</h2>
          <!--          <p>Е-баллов: 24</p>-->
          <button class="btn"
                  @click="logoutMe">
            Выйти
          </button>
        </div>

        <!-- client -->
        <div v-if="user.role === 'client' ">
          <h3>История заказов</h3>
          <div class="order"
               v-for="order in getOrderByIdArr(user.ordersHistory)"
               :key="order.id"
          >
            <div class="order-header">
              <h4>Номер заказа {{ order.id }}</h4>
              <div class="status"
                   :class="{
                    'status-in-progress': order.status == 'wait',
                    'status-return': order.status == 'canceled',
                    'status-done': order.status == 'done'
                 }"
              >

              </div>
            </div>
            <p>
              <span>Состав заказа: </span>
              <span v-for="(prod, idx) in getProductsArrByIDArr(order.products)"
                    :key="idx"
              >
                <span v-if="idx > 0">, </span>
                {{ prod }}
              </span>
            </p>
            <p>Сумма заказа {{ order.totalPrice }} р.</p>
            <!--          <p>Получено 3 е-балла, потрачено 0.</p>-->
          </div>
        </div>

        <!-- manager -->
        <div v-else>
          <h3>Активные заказы</h3>
          <div class="order"
               v-for="order in activeOrder"
               :key="order.id"
          >
            <div class="order-header">
              <h4>Номер заказа {{ order.id }}</h4>
              <div class="status status-in-progress"></div>
            </div>
            <p>
              <span>Состав заказа: </span>
              <span v-for="(prod, idx) in getProductsArrByIDArr(order.products)"
                    :key="idx"
              >
                <span v-if="idx > 0">, </span>
                {{ prod }}
              </span>
            </p>
            <p>Сумма заказа {{ order.totalPrice }} р.</p>
            <!--          <p>Получено 3 е-балла, потрачено 0.</p>-->
            <h5>Изменить статус</h5>
            <button class="btn status status-return"
                    @click="changeOrderStatus(order.id, 'canceled')"
            ></button>
            <button class="btn status status-done"
                    @click="changeOrderStatus(order.id, 'done')"
            ></button>
          </div>
          <h3>История заказов</h3>
          <div class="order"
               v-for="order in inactiveOrder"
               :key="order.id"
          >
            <div class="order-header">
              <h4>Номер заказа {{ order.id }}</h4>
              <div class="status"
                   :class="{
                    'status-return': order.status == 'canceled',
                    'status-done': order.status == 'done'
                 }"
              ></div>

            </div>
            <p>
              <span>Состав заказа: </span>
              <span v-for="(prod, idx) in getProductsArrByIDArr(order.products)"
                    :key="idx"
              >
                <span v-if="idx > 0">, </span>
                {{ prod }}
              </span>
            </p>
            <p>Сумма заказа {{ order.totalPrice }} р.</p>
            <!--          <p>Получено 3 е-балла, потрачено 0.</p>-->
          </div>

        </div>
      </div>

    </div>
    <FooterPart/>
  </div>
</template>

<script>
import FooterPart from "@/views/parts/FooterPart";
import HeaderPart from "@/views/parts/HeaderPart";
import {mapGetters, mapMutations, mapState} from "vuex";

export default {
  name: 'ProfilePage',
  components: {
    FooterPart, HeaderPart
  },
  methods: {
    ...mapMutations(['LOGOUT_USER', 'CHANGE_ORDER_STATUS']),
    logoutMe() {
      this.LOGOUT_USER();
    },
    changeOrderStatus(orderId, newStatus) {
      let params = {
        id: orderId,
        newStatus
      };
      this.CHANGE_ORDER_STATUS(params);
    }
  },
  computed: {
    ...mapState(['user']),
    ...mapGetters([
      'activeOrder',
      'inactiveOrder',
      'getProductsArrByIDArr',
      'getOrderByIdArr'
    ])
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
  padding: 15px;
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

