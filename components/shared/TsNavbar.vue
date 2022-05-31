<script setup>
import { useI18n } from 'vue-i18n'
import { usePreferredLanguages } from '@vueuse/core'
const { locale, availableLocales } = useI18n()

const changeLang = (e) => {
  locale.value = e.target.textContent
}
</script>
<template>
  <nav class="nav">
    <div class="nav__company">
      <img src="/images/logoTSduo.svg" alt="" class="nav__logo" />
      <div>
        <div>Tennisschule</div>
        <div>Oliver Jankovic</div>
      </div>
    </div>
    <div class="nav__items">
      <a href="#info" class="link">more info</a>
      <a href="#offer" class="link">offer</a>
      <a href="#coach" class="link">coach</a>
      <a href="#contact" class="link">contact</a>
    </div>
    <div class="nav__langs">
      <span
        v-for="(lang, index) in availableLocales"
        :key="lang"
        :class="[
          'nav__lang',
          { nav__border: index > 0, nav__active: lang === locale },
        ]"
        @click="changeLang"
      >
        {{ lang }}
      </span>
    </div>
  </nav>
</template>
<style scoped lang="scss">
.nav {
  display: grid;
  grid-template-columns: 400px auto 300px;
  width: 100%;
  height: max-content;
  color: var(--color-iceberg);
  font-size: 24px;
  line-height: 26px;
  height: max-content;
  font-size: 24px;
  align-items: center;

  &__company {
    display: grid;
    grid-template-columns: max-content auto;
    align-items: center;
    gap: 20px;
  }

  &__logo {
    width: 80px;
    height: 80px;
  }

  &__items {
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 80px;
  }

  &__langs {
    justify-self: end;
    text-transform: uppercase;
    display: flex;
  }

  &__lang {
    padding-inline: 15px;
    cursor: pointer;
    transition: all ease 0.3s;

    &:hover {
      color: var(--color-lime);
    }
  }

  &__border {
    border-left: 2px solid var(--color-lime);
  }

  &__active {
    font-weight: var(--font-weight-medium);
    color: var(--color-lime);
  }
}

.link {
  border-bottom: 2px solid transparent;
  transition: all 0.3s ease;
}
.link:hover {
  box-shadow: 0px 3px 0px 0px var(--color-lime);
}

a {
  text-decoration: none;
  color: inherit;
}
</style>
