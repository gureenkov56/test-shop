<template>
  <div class="product">
    <div class="product__img-wrapper">
      <img :src="getPathToImage(product.image)" alt="burger" class="burger-title-image">
    </div>
    <button class="btn">BUY ${{ product.price }}</button>

    <h3>{{ product.name }}</h3>

    <p class="description">{{ product.shortDescription }}</p>



  </div>
</template>

<script>
export default {
  name: "ShowcaseProduct",
  props: ['product'],
  methods: {
    getPathToImage(image) {
      return require(`../assets/images/products/${image}`)
    }
  },
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
</style>