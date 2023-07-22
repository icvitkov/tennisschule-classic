<script setup>
defineProps({
  title: '',
  offer: null,
})
</script>

<template>
  <div class="container">
    <div class="offer">
      <h3 class="offer__title">{{ title }}</h3>
      <div v-for="item in offer" :key="item" class="offer__item">
        <span class="offer__name">{{ item.name }}</span>
        <!-- <span class="offer__price">{{ item.price }}</span> -->
      </div>
      <p class="offer__info"><slot name="additionalInfo"></slot></p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.offer {
  background-color: var(--color-iceberg);
  padding: 20px;
  height: 100%;
  box-shadow: 20px 20px 0px 0px var(--color-lime);
  &__title {
    font-size: 20px;
    font-family: var(--font-secondary);
    padding-bottom: 28px;
  }

  &__item {
    display: flex;
    justify-content: space-between;
    padding-block: 12px;
  }

  &__price {
    font-weight: var(--font-weight-medium);
  }

  &__info {
    font-size: 14px;
    margin-top: 20px;
  }
}
</style>
