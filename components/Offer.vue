<script setup>
import TsOffer from './shared/TsOffer.vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const sessions = computed(() => [
  { name: `${t('single session')}`, price: '50 €' },
  { name: `${t('double session')}`, price: '56 €' },
])

/* const camps = [
  { name: '6 training sessions of 45 min in 3 days', price: '75€' },
  { name: '5 training sessions of 90 min in 5 days', price: '130€' },
  { name: '7 training sessions of 90 min in 6 days', price: '170€' },
] */

const camps = computed(() => [
  {
    name: `5 × 60 min`,
    price: `80 €`,
  },
])
</script>

<template>
  <section class="offers" id="offer">
    <div class="grid">
      <h2 class="offers__title">{{ $t('Our offer') }}</h2>
      <div class="offers__container">
        <TsOffer :title="$t('Training')" :offer="sessions">
          <template #additionalInfo>
            {{
              t(
                'Price includes: 60 min of training, tennis balls, tennis court, Head racquet (children reacquets also available)'
              )
            }}
          </template>
        </TsOffer>
        <TsOffer
          :title="$t('Tennis summer camps for kids and youngsters')"
          :offer="camps"
        >
          <template #additionalInfo>
            {{ t('Price per person') }}
            <br />
            {{ t('3-4 people in a group') }}
          </template>
        </TsOffer>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.offers {
  max-width: 100%;
  padding-block: 80px;
  background-color: var(--color-black) /* rgba(31, 33, 48, 0.541) */;

  &__title {
    grid-column: 1/-1;
    color: var(--color-lime);
    font-size: 40px;
    font-family: var(--font-secondary);
    padding-bottom: 32px;
  }

  &__container {
    grid-column: 1/-1;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 64px;

    @include mq('tablet-lg') {
      grid-template-columns: repeat(2, 1fr);
    }

    @include mq('tablet') {
      grid-template-columns: 1fr;
    }
  }
}
</style>
