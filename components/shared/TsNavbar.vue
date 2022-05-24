<script setup></script>
<template>
  <div class="grid">
    <nav class="nav">
      <div>logo</div>
      <div class="nav__items">
          <div>about us</div>
          <div>prices</div>
          <div>contact</div>
      </div>
    </nav>
  </div>
</template>
<style scoped lang="scss">
.nav {
    grid-column: 1/-1;
    display: flex;
    justify-content: space-between;

    &__items {
        display: flex;
        gap: 20px;
    }
}
</style>
