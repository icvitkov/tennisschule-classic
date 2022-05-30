<script setup>
import TsOffer from './shared/TsOffer.vue'
const sessions = [
  { name: 'single session', price: '40€' },
  { name: 'double session', price: '50€ (25€ per person)' },
]

const camps = [
  { name: '6 training sessions of 45 min in 3 days', price: '75€' },
  { name: '5 training sessions of 90 min in 5 days', price: '130€' },
  { name: '7 training sessions of 90 min in 6 days', price: '170€' },
]
</script>

<template>
  <section class="offers" id="offer">
    <div class="grid">
      <h2 class="offers__title">Our offer</h2>
      <div class="offers__container">
        <TsOffer
          title="Training sessions for adults and youngsters"
          :offer="sessions"
        >
          <template #additionalInfo>
            Price includes: 50 min of training, tennis balls, tennis court, Head
            racquet (children reacquets also available)
          </template>
        </TsOffer>
        <TsOffer title="Summer camps for all levels" :offer="camps"></TsOffer>
        <TsOffer title="Summer camps for all levels" :offer="camps"></TsOffer>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.offers {
  padding-block: 80px;
  background-color: var(--color-black) /* rgba(31, 33, 48, 0.541) */;

  &__title {
    grid-column: 1/3;
    color: var(--color-lime);
    font-size: 40px;
    font-family: var(--font-secondary);
    padding-bottom: 32px;
    &::after {
      content: '';
      background-color: var(--color-iceberg);
      width: 100px;
      height: 3px;
      border-radius: 5px;
      margin-top: 50px;
      margin-left: -90px;
      position: absolute;
    }
  }
  &__container {
    grid-column: 1/-1;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 64px;
  }
}
</style>
