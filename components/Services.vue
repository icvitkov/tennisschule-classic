<script setup>
import TennisBall from '@/public/images/tennis-ball.svg'
import Racket from '@/public/images/racket.svg'
</script>

<template>
  <section class="services">
    <div class="grid">
      <h2 class="services__title">Our services for you</h2>
      <div class="services__container">
        <TsService
          title="Head Tour balls"
          additional-info="(3 pieces)"
          price="10.00 €"
        />
        <TsService title="Racquet rental per hour" price="4.00 €">
            <template #svg>
                <Racket class="icon"/>
            </template>
        </TsService>
        <TsService title="Ball rental per hour" price="2.00 €">
          <template #svg>
            <TennisBall class="icon" />
          </template>
        </TsService>
        <TsService title="Court rental per hour" price="10.00 €" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.services {
  padding-block: 60px;
  background-color: var(--color-iceberg) /* rgba(31, 33, 48, 0.541) */;

  &__title {
    grid-column: 1/5;
    color: var(--color-black);
    font-size: 36px;
    font-family: var(--font-secondary);
    padding-bottom: 32px;
    &::after {
      content: '';
      background-color: var(--color-lime);
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
    grid-template-columns: repeat(4, 1fr);
    gap: 64px;
  }
}

.icon {
    width: 50px;
    height: 50px;
}
</style>
