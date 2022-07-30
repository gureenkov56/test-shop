<template>
  <div>
    <HeaderPart/>
    <div class="shocasePage__wrapper">
      <div class="notice">
        <div class="notice__inner">
          <h5>Регистрируйся!</h5>
          <p>Всем новым пользователям даём по е-баллу</p>
        </div>
        <button @click="hideParentElement">×</button>
      </div>

      <div class="products-wrapper">
        <ShowcaseProduct v-for="(name, index) in [1,2,1,1,1]" :key="index"/>
      </div>
    </div>

    <FooterPart/>

  </div>
</template>

<script>
import HeaderPart from "@/views/parts/HeaderPart";
import ShowcaseProduct from "@/components/ShowcaseProduct";
import FooterPart from "@/views/parts/FooterPart";

export default {
  name: "ShowcasePage",

  components: {
    HeaderPart, ShowcaseProduct,
    FooterPart
  },
  methods: {
    hideParentElement($event) {
      $event.target.parentElement.classList.add('hide');
    }
  }
}
</script>

<style scoped>

.shocasePage__wrapper {
  max-width: 800px;
  margin: 20px auto 80px auto;
  padding: 0 10px;
}
.products-wrapper {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}




</style>