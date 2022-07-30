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
import { mapState, mapMutations } from 'vuex';

export default {
  name: "ShowcasePage",
  components: {
    HeaderPart, ShowcaseProduct,
    FooterPart
  },
  data() {
    return {
      test: ''
    }
  },
  computed: {
    ...mapState({
      showNotice: 'noticeOnShowCaseWasClosed'
    }),

  },
  methods: {
    ...mapMutations(['closeNoticeOnShowcase']),

    closeNotice() {
      this.closeNoticeOnShowcase();
      sessionStorage.setItem('showcaseNoticeWasClosed', 'yes');
    }
  },
  mounted() {
    if (sessionStorage.getItem('showcaseNoticeWasClosed')) {
      this.closeNotice();
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