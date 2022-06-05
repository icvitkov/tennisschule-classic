<script setup></script>

<template>
  <section class="contact" id="contact">
    <div class="grid">
      <div class="contact__title">{{$t('Contact')}}</div>
      <div class="contact__info">
        <p>email: <a href="mailto:oliverjankovictk@gmail.com">oliverjankovictk@gmail.com</a></p>
        <p>mobile: <a href="tel:+385959021622">+385959021622</a></p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.contact {
  background-color: var(--color-black);
  color: var(--color-white);
  padding-block: 80px;

  &__title {
    grid-column: 1/3;
    color: var(--color-lime);
    font-size: 40px;
    font-family: var(--font-secondary);

    @include mq ('tablet') {
      grid-column: 1/-1;
    }
  }

  &__info {
    grid-column: 3/-1;
    align-self: center;
    font-size: 18px;

    @include mq ('tablet') {
      grid-column: 1/-1;
    }

    & > p > a {
      text-decoration: none;
      color: inherit;
    }
  }
}
</style>
