<script setup>
defineProps({
  title: '',
  additionalInfo: null,
  price: '',
})
</script>

<template>
  <div class="service">
    <h3 class="service__title">{{ title }}</h3>
    <p class="service__info">{{ additionalInfo }}</p>
    <p class="service__price">{{ price }}</p>
  </div>
</template>

<style lang="scss" scoped>
.service {
  background-color: var(--color-black);
  padding: 20px;
  height: 100%;
  display: grid;
  text-align: center;
  color: var(--color-iceberg);
  &__title {
    font-size: 24px;
    font-family: var(--font-secondary);
  }

  &__price {
    font-weight: var(--font-weight-medium);
    font-size: 18px;
  }

  &__info {
    font-size: 14px;
    margin-top: 20px;
  }
}
</style>
