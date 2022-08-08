<template>
  <div>
    <HeaderPart/>
    <div class="cart">
      <div class="empty-cart"
           v-if="!inCart.length"
      >
        <p>Положи сюда что-нибудь </p>
        <p>С пустой корзиной не ходят уважающие себя люди</p>
        <router-link to="/showcase">
          <button class="btn">В каталог</button>
        </router-link>
      </div>
      <div v-else class="wrapper">
        <div
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
              <button
                  class="btn"
                  @click="product.showIngredients = !product.showIngredients"
              >
                Изменить состав
              </button>
              <ul v-show="product.showIngredients"
                  class="ulIngredientList"
              >
                <label v-for="(ingredient, idx) in product.ingredients"
                       :key="idx"
                >
                  <li>
                    <input type="checkbox" checked @click="ingredientClick($event, product)"
                           :data-ingredient="ingredient">
                    {{ ingredient }}
                  </li>
                </label>
              </ul>

            </div>
            <div class="item-total-price">
              <h2>${{ product.price * productInCart(product.id) }}</h2>
              <plusMinusPart :product="product"
                             @minusCount="minusCount"
                             @plusCount="plusCount"
              />
            </div>
          </div>


        </div>

        <button class="make-order" @click="isOpenModal = true">
          Оформить заказ
        </button>
      </div>

    </div>
    <FooterPart/>

    <transition name="fade">
      <div class="modal-wrapper" v-show="isOpenModal">
        <div class="modal order-done-modal">
          <p>Ваш заказ:</p>
          <h2>15505</h2>
          <button class="order-done-btn btn" @click="closeModal">OK</button>
        </div>
      </div>
    </transition>
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
      inCart: this.$store.state.inCart,
      productIngredients: true,
      isOpenModal: false,
    }
  },
  methods: {
    ...mapMutations([
      'MINUS_COUNT_IN_CART',
      'PLUS_COUNT_IN_CART',
      'ADD_EXCLUDED_INGREDIENT',
      'REMOVE_EXCLUDED_INGREDIENT',
      'CLEAN_CART'
    ]),

    minusCount(id) {
      this.MINUS_COUNT_IN_CART(id);
    },

    plusCount(id) {
      this.PLUS_COUNT_IN_CART(id);
    },

    productInCart(id) {
      return store.getters.productInCart(id)[0].count;
    },

    ingredientClick(event, product) {
      let ingredient = event.target.dataset.ingredient;

      if (!event.target.checked) {
        this.ADD_EXCLUDED_INGREDIENT([product, ingredient]);
      } else {
        this.REMOVE_EXCLUDED_INGREDIENT([product, ingredient]);
      }
    },

    closeModal() {
      this.isOpenModal = false;
      this.CLEAN_CART();
    }
  },
  computed: {}
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
  margin: 0 auto 230px auto;
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
  margin: 1rem auto 0 auto;
  background-color: #343232;
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

.ulIngredientList {
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
}

.ulIngredientList > label {
  margin: 10px;
  margin-left: 0;
  list-style-type: none;
  padding: 3px 10px;
  background-color: #252525;
  color: white;
  border-radius: 3px;
  cursor: pointer;
  user-select: none;
}

.make-order {
  background-color: green;
  color: white;
  border: none;
  border-radius: 50px;
  padding: 20px 30px;
  cursor: pointer;


  position: fixed;
  bottom: 100px;
  width: 230px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
}

.make-order:hover {
  background-color: #00af00;
}

.modal-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: rgba(0, 0, 0, 0.8);

  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background-color: #262626;
  margin: 10px;
  padding: 30px 10px;
  max-width: 300px;
  width: 30%;
  min-width: 150px;
  color: white;
  border-radius: 10px;
}

.order-done-modal {
  text-align: center;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
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

  .ulIngredientList {
    justify-content: space-around;
  }
}
</style>