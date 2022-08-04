<template>
  <div>
    <HeaderPart/>
    <div class="cart">
      <div  class="empty-cart"
            v-if="!inCart.length"
      >
        <p>Положи сюда что-нибудь </p>
        <p>С пустой корзиной не ходят уважающие себя люди</p>
        <router-link to="/showcase">
          <button class="btn">В каталог</button>
        </router-link>
      </div>
      <div  v-else
            v-for="(product, index) in inCart"
            :key="index"
            class="cart-item"
      >
        <div class="item-wrapper">
          <div>
            <img
                :src="require(`../assets/images/products/${product.image}`)"
                class="item-image"
                alt="Картинка товара">
          </div>
          <div class="item-info">
            <h3>{{ product.name }}</h3>
            <p class="description">{{ product.description }}</p>
            <button class="btn">Изменить состав</button>
          </div>
          <div class="item-total-price">
            <h2>${{ product.price * productInCart(product.id) }}</h2>
            <plusMinusPart  :product="product"
                            @minusCount="minusCount"
                            @plusCount="plusCount"
            />

          </div>
        </div>

      </div>

    </div>
    <FooterPart/>
  </div>
</template>

<script>
import HeaderPart from "@/views/parts/HeaderPart";
import FooterPart from "@/views/parts/FooterPart";
import plusMinusPart from "@/views/parts/plusMinusPart";
import store from "@/store";
import {mapMutations} from "vuex";


export default {
  name: "CartPage",
  components: {HeaderPart, FooterPart, plusMinusPart},
  data() {
    return {
      inCart: this.$store.state.inCart
    }
  },
  methods: {
    ...mapMutations(['MINUS_COUNT_IN_CART', 'PLUS_COUNT_IN_CART']),

    minusCount(id) {
      this.MINUS_COUNT_IN_CART(id);
    },

    plusCount(id) {
      this.PLUS_COUNT_IN_CART(id)
    },

    productInCart(id) {
      return store.getters.productInCart(id)[0].count;
    }
  },
  computed: {

  }
}
</script>

<style scoped>
.empty-cart {
  color: #6c6c6c;
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
}

.cart {
  max-width: 800px;
  margin: 0 auto 40px auto;
  padding: 10px;
}

.item-wrapper {
  display: flex;
  flex-wrap: wrap;
}

.item-info {
  flex: 2;
  min-width: 200px;
}

.item-total-price {
  flex: 1;
}

.cart-item::after {
  content: "";
  display: block;
  width: 85%;
  height: 1px;
  margin: 0 auto;
  background-color: #343232;
  margin-top: 1rem;
}

.item-image {
  width: 100px;
  margin: 20px;
  object-fit: contain;
}

.description {
  color: #444444;
  margin-right: 3rem;
}

.count-wrapper {
  margin-bottom: 1rem;
}

@media screen and (max-width: 500px) {
  .item-wrapper {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .description {
    margin-right: 0;
  }
}
</style>