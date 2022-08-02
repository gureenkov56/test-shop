<template>
  <div class="product">
    <div class="product__img-wrapper">
      <img :src="require(`../assets/images/products/${product.image}`)" alt="burger" class="burger-title-image">
    </div>

    <button
        class="btn"
        v-show="!isProductInCart(product.id).length"
        @click="addProduct(product)">
      BUY ${{ product.price }}
    </button>

    <div
        class="count-wrapper"
        v-show="isProductInCart(product.id).length"
    >
      <button class="btn-math" @click="minusCount(product.id)">-</button>

      <span
          v-if="!isProductInCart(product.id).length"
          class="math"
      >${{ product.price }} х 0
      </span>
      <span
          v-else
          class="math"
      >${{ product.price }} х {{ isProductInCart(product.id)[0].count }}
      </span>

      <button class="btn-math" @click="plusCount(product.id)">+</button>
    </div>

    <h3>{{ product.name }}</h3>

    <p class="description">{{ product.shortDescription }}</p>


  </div>
</template>

<script>
import {mapMutations, mapGetters} from "vuex";

export default {
  name: "ShowcaseProduct",
  props: ['product', 'index'],
  methods: {
    ...mapMutations(['ADD_PRODUCT_TO_CART', 'MINUS_COUNT_IN_CART', 'PLUS_COUNT_IN_CART']),

    addProduct(product) {
      this.ADD_PRODUCT_TO_CART(product);
    },

    minusCount(id) {
      this.MINUS_COUNT_IN_CART(id);
    },

    plusCount(id) {
      this.PLUS_COUNT_IN_CART(id)
    }
  },
  computed: {
    ...mapGetters(['isProductInCart']),

  }
}
</script>

<style scoped>
.product {
  max-width: 200px;
  margin: 10px;
  padding: 10px;
  text-align: center;
}

.product__img-wrapper {
  height: 130px;
}

.burger-title-image {
  max-width: 180px;
  max-height: 135px;
}

h3 {
  color: #EA983C;
  margin-bottom: 5px;
  margin-top: 3px;
}

.description {
  font-size: .8rem;
  margin: 0;
  color: #444444;
}

button {
  font-size: 1.1rem;
  width: 150px;
  padding: 5px;
}

.count-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid white;
  background-color: black;
  max-width: 150px;
  margin: 0 auto;
  z-index: 2;
}

.math {
  flex: 1;
  color: white;
}

.btn-math {
  background-color: black;
  color: white;
  height: 2rem;
  width: 2rem;
  border: none;
  cursor: pointer;
}


</style>