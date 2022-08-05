<template>
  <div
      class="count-wrapper"
  >
    <button class="btn-math" @click="$emit('minusCount', product.id)">-</button>

    <span class="math"
    >${{ product.price }} х {{ productInCart }}
      </span>

    <button class="btn-math" @click="$emit('plusCount', product.id)">+</button>
  </div>

</template>

<script>
import store from "@/store";

export default {
  name: "plusMinusPart",
  props: [
    'product',
  ],
  computed: {
    productInCart() {
      return store.getters.productInCart(this.product.id)[0].count;
    }
  }
}
</script>

<style scoped>
.count-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid white;
  background-color: black;
  max-width: 150px;
  z-index: 2;
}

.math {
  flex: 1;
  color: white;
  text-align: center;
}

.btn-math {
  background-color: black;
  color: white;
  height: 2rem;
  width: 2rem;
  border: none;
  cursor: pointer;
}

button {
  font-size: 1.1rem;
  width: 150px;
  padding: 5px;
}
</style>