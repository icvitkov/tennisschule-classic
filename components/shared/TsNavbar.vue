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
      <div class="nav__name">
        <div>Tennisschule</div>
        <div>Oliver Jankovic</div>
      </div>
    </div>
    <div class="nav__items">
      <a href="#info" class="link">{{ $t('more info') }}</a>
      <a href="#offer" class="link">{{ $t('offer') }}</a>
      <a href="#coach" class="link">{{ $t('coaches') }}</a>
      <a href="#contact" class="link">{{ $t('contact') }}</a>
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
  grid-template-columns: 300px auto 300px;
  width: 100%;
  height: max-content;
  color: var(--color-iceberg);
  font-size: 36px;
  line-height: 38px;
  height: max-content;
  align-items: center;

  @include mq('tablet-lg') {
    font-size: 24px;
    padding-block: 10px 20px;
  }

  @include mq('tablet') {
    display: flex;
    justify-content: space-between;
  }

  @include mq('mobile') {
    font-size: 18px;
    line-height: 20px;
  }

  &__company {
    display: grid;
    grid-template-columns: max-content auto;
    align-items: center;
    gap: 20px;
  }

  &__name {
    @include mq('tablet') {
      display: none;
    }
  }

  &__logo {
    width: 120px;
    height: 120px;

    @include mq('tablet-lg') {
      display: none;
    }
  }

  &__items {
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 80px;

    @include mq('tablet') {
      display: none;
    }
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
