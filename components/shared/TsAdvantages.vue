<script setup>
defineProps({
  title: '',
  img: '',
})
</script>

<template>
  <div class="card">
    <div class="grid">
      <img :src="img" :alt="title" class="img" />
      <div class="description">
        <h2 class="title">{{ title }}</h2>
        <slot name="description"></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  padding-block: 40px;
}

.img {
  height: 450px;
  width: 100%;
  object-fit: cover;
  position: relative;
  grid-column: 1/5;
  box-shadow: 20px 20px 0px 0px var(--color-lime);
  @include mq('tablet') {
    height: 400px;
    grid-column: 1/-1;
    width: calc(100% - 20px);
  }

  /* filter: grayscale(1);
  transition: all ease 0.3s;

  :hover {
    filter: none;
  } */
}

.description {
  grid-column: 6/12;
  font-size: 18px;
  @include mq('tablet') {
    grid-column: 1/-1;
    padding-top: 40px;
  }
}

.title {
  font-size: 32px;
  font-family: var(--font-secondary);
  padding-bottom: 28px;
}
</style>
