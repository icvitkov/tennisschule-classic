<script setup>
import { useI18n } from 'vue-i18n'
import { usePreferredLanguages } from '@vueuse/core'
import Hamburger from '@/assets/svgs/hamburger.svg'
const { locale, availableLocales } = useI18n()

const changeLang = (e) => {
  locale.value = e.target.textContent
}

const show = ref(false)
const toggleMenu = () => {
  show.value = !show.value
  document.getElementsByTagName('body')[0].classList.toggle('scroll--disabled')
  /* if (show.value) {
    document.getElementsByTagName('body')[0].classList.add('scroll--disabled')
  } */
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
    <Hamburger class="nav__hamburger" @click="toggleMenu" />
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
  <Teleport to="body">
    <Transition>
      <div v-if="show" class="modal">
        <div class="modal__close" @click="toggleMenu">×</div>
        <div class="modal__nav">
          <a href="#info" class="link" @click="toggleMenu">{{
            $t('more info')
          }}</a>
          <a href="#offer" class="link" @click="toggleMenu">{{
            $t('offer')
          }}</a>
          <a href="#coach" class="link" @click="toggleMenu">{{
            $t('coaches')
          }}</a>
          <a href="#contact" class="link" @click="toggleMenu">{{
            $t('contact')
          }}</a>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
<style scoped lang="scss">
.nav {
  display: grid;
  grid-template-columns: 400px auto 300px;
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
    display: flex;
    grid-template-columns: unset;
    justify-content: space-between;
  }

  @include mq('mobile') {
    font-size: 18px;
    line-height: 20px;
  }

  &__hamburger {
    display: none;
    color: var(--color-lime);
    width: 15%;
    height: 15%;
    @include mq('tablet-lg') {
      display: flex;
    }
  }

  &__company {
    display: grid;
    grid-template-columns: max-content auto;
    align-items: center;
    gap: 20px;

    @include mq('tablet-lg') {
      display: none;
    }
  }

  &__logo {
    width: 120px;
    height: 120px;
  }

  &__items {
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 60px;

    @include mq('tablet-lg') {
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

.modal {
  width: 100%;
  height: 100vh;
  background-color: var(--color-iceberg);
  position: absolute;
  z-index: 3;
  padding: 2% 6%;
  overflow: hidden;

  &__close {
    display: grid;
    font-size: 9vh;
    justify-content: end;
    padding-bottom: 2%;
    cursor: pointer;
  }

  &__nav {
    display: grid;
    width: 100%;
    justify-content: center;
    gap: 20px;
    font-size: 3vh;
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.4s linear;
}

.v-enter,
.v-leave-to {
  opacity: 0;
}
</style>
