<script setup>
defineProps({
  title: '',
  img: '',
})
</script>

<template>
  <div class="card">
    <div class="grid">
      <div class="container"><img :src="img" alt="" class="img" /></div>
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
  height: 100%;
  width: 100%;
  object-fit: cover;
  position: relative;
  left: 30px;
  top: 30px;
  /* filter: grayscale(1);
  transition: all ease 0.3s;

  :hover {
    filter: none;
  } */
}

.container {
  height: 400px;
  width: 100%;
  background: var(--color-lime);
  grid-column: 1/5;

  :hover {
    filter: none;
  }
}

.description {
  grid-column: 6/12;
}

.title {
  font-size: 32px;
  font-family: var(--font-secondary);
  padding-bottom: 28px;
}
</style>
