<script setup>
import TsNavbar from './shared/TsNavbar.vue'
</script>

<template>
  <section class="main">
    <TsNavbar />
    <div class="block"></div>
    <img src="/images/tennisPlayer.png" alt="" class="main__img" />
    <div class="blocky--right"></div>
  </section>
</template>

<style lang="scss" scoped>
.main {
  height: 100vh;
  display: grid;
  overflow: hidden;

  &__img {
    height: 90vh;
    justify-self: center;
    align-self: end;
  }
}
.block {
  background-color: rgba(31, 33, 48, 0.801);
  width: 60%;
  height: 100%;
  border-radius: 5px;
  transform: skew(35deg);
  position: absolute;
  opacity: 0.5;
  z-index: -1;
  left: -25%;
}

.blocky--right {
  background-color: #cedc00;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  transform: skew(-55deg);
  position: absolute;
  z-index: -1;
  left: 65%;
}
</style>
