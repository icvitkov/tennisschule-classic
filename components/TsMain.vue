<script setup>
import TsNavbar from './shared/TsNavbar.vue'
</script>

<template>
  <section class="main">
    <TsNavbar />
    <!-- <div class="block"></div> -->
    <div class="main__hero">
      <h1 class="main__title">
        Spend an acitve holiday with Tennis School Oliver
      </h1>
      <img src="/images/racket.png" alt="" class="main__img" />
    </div>
    <div class="blocky--right"></div>
  </section>
</template>

<style lang="scss" scoped>
.main {
  height: 100vh;
  display: grid;
  overflow: hidden;
  background-color: var(--color-black);

  &__hero {
    display: flex;
    z-index: 2;
    padding-inline: 20px;
  }

  &__title {
    font-family: var(--font-secondary);
    color: var(--color-iceberg);
    font-size: 68px;
    align-self: center;
  }

  &__img {
    justify-self: center;
    align-self: center;
    height: 70vh;
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
  background-color: var(--color-lime);
  width: 100%;
  height: 100%;
  border-radius: 5px;
  transform: skew(-55deg);
  position: absolute;
  left: 65%;
}
</style>
