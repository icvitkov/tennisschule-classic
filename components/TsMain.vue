<script setup>
</script>

<template>
  <section class="main">
    <TsNavbar class="main__nav" />
    <div class="main__content">
      <div class="main__hero">
        <img src="/images/background.svg" alt="" />
      </div>
      <div class="main__text">
        <h1 class="main__title">
          {{$t("Spend an active holiday with Tennisschule Oliver Jankovic")}}
        </h1>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.main {
  height: 100vh;
  width: 100%;
  background-color: var(--color-black);
  display: grid;
  grid-template-rows: min-content auto;
  padding-inline: 100px;
  padding-top: 40px;

  &__content {
    display: grid;
    width: 100%;
    grid-template-rows: 80% 20%;
  }

  &__hero {
    width: 100%;
    height: 100%;
    display: grid;
    align-self: flex-start;
    justify-items: end;
    & > img {
      height: 100%;
    }
  }

  &__text {
    display: grid;
    width: 60%;
    align-content: flex-end;
    position: relative;
    padding-bottom: 40px;
  }

  &__title {
    font-family: var(--font-secondary);
    color: var(--color-iceberg);
    font-size: 4vw;
    z-index: 1;
  }

  &__img {
    justify-self: center;
    align-self: center;
    height: 70vh;
  }
}
</style>
