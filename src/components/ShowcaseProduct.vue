<template>
  <div class="product">
    <div class="product__img-wrapper">
      <img :src="require(`../assets/images/products/${product.image}`)" alt="burger" class="burger-title-image">
    </div>

    <button
        class="btn"
        v-if="!productInCart(product.id).length"
        @click="addProduct(product)">
      BUY ${{ product.price }}
    </button>

    <plusMinusPart
        v-else
        :product="product"
        @minusCount="minusCount"
        @plusCount="plusCount"
    />


    <h3>{{ product.name }}</h3>

    <p class="description">{{ product.shortDescription }}</p>


  </div>
</template>

<script>
import {mapMutations, mapGetters} from "vuex";
import plusMinusPart from "@/views/parts/plusMinusPart";

export default {
  name: "ShowcaseProduct",
  components: {plusMinusPart},
  props: ['product', 'index'],
  methods: {
    ...mapMutations(['ADD_PRODUCT_TO_CART', 'MINUS_COUNT_IN_CART', 'PLUS_COUNT_IN_CART']),

    addProduct(product) {
      this.ADD_PRODUCT_TO_CART(product.id);
    },

    minusCount(id) {
      this.MINUS_COUNT_IN_CART(id);
    },

    plusCount(id) {
      this.PLUS_COUNT_IN_CART(id)
    },
  },
  computed: {
    ...mapGetters(['productInCart']),

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
  margin: 0 auto;
}




</style>