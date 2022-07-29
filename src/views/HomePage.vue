<template>
  <div class="home">
    <img src="../assets/images/logo-2.png" alt="logo">
    <div class="home__buttons-wrapper hidden">
      <div>
        <router-link to="/showcase">
          <button>Доставка</button>
        </router-link>
        <button>Бронь места</button>
        <button>Войти</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  mounted() {
    console.log('mounted');

    const
        logo = document.querySelector('img'),
        homeButtonsWrapper = document.querySelector('.home__buttons-wrapper');

    setTimeout( () => {
      logo.style.opacity = '1';
      logo.style.width = '30%';
      logo.style.top = '30px';
      logo.style.marginTop = '30px';

      homeButtonsWrapper.style.visibility = 'visible';
      homeButtonsWrapper.style.opacity = '1';
      homeButtonsWrapper.style.bottom = '10%';
    }, 0)

  },
  methods: {}
}
</script>

<style scoped>

.home {
  height: 100vh;
  text-align: center;

  background-image: linear-gradient(rgba(255, 164, 0, 0.5), rgba(0, 0, 0, 0.5)),
  url('../assets/images/home-bg.jpeg');
  background-position: center;
  background-size: cover;
}

img {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  margin-top: 100px;
  max-width: 400px;
  width: 80%;
  opacity: 0;
  transition: opacity 1s, width 1s 1s, margin-top 1s 2s;
}

.home__buttons-wrapper {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  transition: all 1s 2.2s;
}

button {
  display: block;
  margin: 10px auto;
  padding: 20px 40px;
  background: rgba(0, 0, 0);
  border: 2px solid #fff;
  color: #fff;
  width: 250px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 500;
}
</style>