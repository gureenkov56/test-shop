<template>
  <div>
    <HeaderPart/>
    <div class="shocasePage__wrapper">

      <div class="notice" :class="{'hide': showNotice}">
        <div class="notice__inner">
          <h5>Регистрируйся!</h5>
          <p>Всем новым пользователям даём по е-баллу</p>
        </div>
        <button @click="closeNotice">×</button>
      </div>

      <p v-if="!products.length" class="loading" ref="loading">
        Загрузка
      </p>
      <div v-else class="products-wrapper">
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
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  name: "ShowcasePage",
  components: {
    HeaderPart, ShowcaseProduct,
    FooterPart
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapState({
      showNotice: 'noticeOnShowCaseWasClosed',
      products: 'products'
    }),
  },
  methods: {
    ...mapMutations(['CLOSE_NOTICE_SHOWCASE']),
    ...mapActions(['getProducts']),

    closeNotice() {
      this.CLOSE_NOTICE_SHOWCASE();
      sessionStorage.setItem('showcaseNoticeWasClosed', 'yes');
    }
  },
  created() {
    this.getProducts()
  },
  mounted() {
    if (sessionStorage.getItem('showcaseNoticeWasClosed')) {
      this.closeNotice();
    }
  },
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

.loading {
  animation: loadingAnimate 2s infinite linear;
}

@keyframes loadingAnimate {
  0% { opacity: 0; }
  20% { opacity: 1; }
  80% { opacity: 1; }
  100% { opacity: 0; }

}




</style>