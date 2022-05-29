<script setup></script>
<template>
  <nav class="nav">
    <img src="/images/logoTSduo.svg" alt="" class="nav__logo" />
    <div class="nav__items">
      <NuxtLink to="#info" class="link">more info</NuxtLink>
      <NuxtLink to="#info" class="link">offer</NuxtLink>
      <NuxtLink to="#info" class="link">coach</NuxtLink>
      <NuxtLink to="#info" class="link">contact</NuxtLink>
    </div>
  </nav>
</template>
<style scoped lang="scss">
.nav {
  display: flex;
  width: 100%;
  height: max-content;
  color: var(--color-iceberg);

  &__logo {
    width: 80px;
    height: 80px;
    margin-right: 100px;
  }

  &__items {
    display: flex;
    gap: 80px;
    padding-top: 20px;
    font-size: 24px;
    height: max-content;
  }
}

.link {
  border-bottom: 2px solid transparent;
  transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.link:hover {
  border-bottom: 2px solid var(--color-lime);
}

a {
  text-decoration: none;
  color: inherit;
}
</style>
