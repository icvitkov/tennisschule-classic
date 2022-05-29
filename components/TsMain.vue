<script setup>
import TsNavbar from './shared/TsNavbar.vue'
</script>

<template>
  <section class="main">
    <div class="main__content">
      <TsNavbar />
      <div class="main__text">
        <h1 class="main__title">
        Spend an active holiday with Tennis School Oliver Janković
      </h1>
        <!-- <img src="/images/tennisPlayer.png" alt="" /> -->
      </div>
    </div>
    <div class="main__hero">
      <img src="/images/background.svg" alt="" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.main {
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background-color: var(--color-black);
  display: grid;
  grid-template-columns: 60% 40%;
  padding-inline: 100px;
  padding-top: 40px;

  &__hero {
    width: 100%;
    display: grid;
    justify-items: end;
    & > img {
      width: 100%;
    }
  }

  &__content {
    display: grid;
    width: 100%;
    grid-template-rows: min-content auto;
  }

  &__text {
    display: grid;
    align-content: flex-end;
    position: relative;
    padding-bottom: 40px;

    & > img {
      opacity: 0.3;
      position: absolute;
      bottom: 0;
    }
  }

  &__title {
    font-family: var(--font-secondary);
    color: var(--color-iceberg);
    font-size: 112px;
    z-index: 1;
  }

  &__img {
    justify-self: center;
    align-self: center;
    height: 70vh;
  }
}
</style>
