<script setup>
import Hero from '@/public/images/background.svg'
</script>

<template>
  <section class="main">
    <TsNavbar class="main__nav" />
    <div class="main__content">
      <Hero class="main__img" />
      <div class="main__text" itemscope>
        <h1 class="main__title">
          {{ $t('Spend an active holiday with Tennisschule Oliver Jankovic') }}
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
  @include mq('tablet') {
    padding-inline: 20px;
    padding-bottom: 20px;
  }

  @include mq('mobile') {
    padding-inline: 10px;
    padding-block: 5px;
    height: 100;
  }
  &__content {
    display: grid;
    width: 100%;
    height: 100%;
    position: relative;
  }

  &__text {
    display: grid;
    width: 60%;
    height: 100%;
    align-content: flex-end;

    @include mq('mobile') {
      width: 100%;
      padding-bottom: 60px;
    }
  }

  &__title {
    font-family: var(--font-secondary);
    color: var(--color-iceberg);
    font-size: 4vw;
    z-index: 1;

    @include mq('mobile') {
      font-size: 24px;
    }
  }

  &__img {
    height: 70%;
    width: auto;
    justify-self: flex-end;
    position: absolute;

    @include mq('tablet') {
      height: auto;
    }
  }
}
</style>
