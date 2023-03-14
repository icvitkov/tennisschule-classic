<script setup></script>

<template>
  <section class="main">
    <TsNavbar class="main__nav" />
    <div class="main__wrapper">
      <div class="main__title">
        <h1 itemscope>
          {{ $t('Tennis in Bol, Brač') }}
        </h1>
        <h2>Tennisschule Oliver Jankovic</h2>
      </div>
      <div class="hero"></div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.main {
  display: grid;
  grid-template-rows: max-content auto;
  width: 100%;
  height: 100vh;
  background-color: var(--color-gray);

  &:before {
    content: '';
    top: -10rem;
    left: -10rem;
    width: calc(100% + 20rem);
    height: calc(100% + 20rem);
    z-index: 1;
    position: fixed;
    background-image: url(https://upload.wikimedia.org/wikipedia/commons/5/5c/Image_gaussian_noise_example.png);
    opacity: 0.15;
  }

  &__wrapper {
    display: grid;
    grid-template-columns: 40% 60%;

    @include mq('tablet-lg') {
      grid-template-columns: 30% 70%;
    }
  }
}

.main__title {
  width: 100%;
  color: var(--color-lime);
  align-self: flex-end;
  font-weight: 400;
  font-family: var(--font-secondary);
  position: relative;

  @include mq('tablet-lg') {
    padding-inline: 10px;
  }

  & > h1 {
    margin-right: -100px;
    margin-left: 100px;
    font-size: 80px;

    @include mq('tablet-lg') {
      font-size: 60px;
      margin-left: unset;
      margin-right: -120px;
    }
  }

  & > h2 {
    margin-right: -100px;
    margin-left: 100px;
    font-size: 40px;

    @include mq('tablet-lg') {
      font-size: 30px;
      margin-left: unset;
      margin-right: -120px;
    }
  }
}

.hero {
  width: 100%;
  height: 100%;
  background-image: url('public/images/background.jpg');
  background-size: cover;
  background-position: bottom;

  @include mq('tablet-lg') {
    background-position-x: center;
  }
}
</style>
