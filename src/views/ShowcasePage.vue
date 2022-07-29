<template>
  <div>
    <HeaderPart/>

    <div class="products-wrapper">
      <ShowcaseProduct v-for="(name, index) in [1,2,1,1,1]" :key="index"/>
    </div>

  </div>
</template>

<script>
import HeaderPart from "@/views/parts/HeaderPart";
import ShowcaseProduct from "@/components/ShowcaseProduct";

export default {
  name: "ShowcasePage",
  components: {
    HeaderPart, ShowcaseProduct
  }
}
</script>

<style scoped>

.products-wrapper {
  display: flex;
  justify-content: space-around;
  max-width: 800px;
  flex-wrap: wrap;
  margin: 20px auto;

}


</style>