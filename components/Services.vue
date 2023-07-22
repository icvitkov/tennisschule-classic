<script setup>
import TennisBall from '@/assets/svgs/tennis-ball.svg'
import Racket from '@/assets/svgs/racket.svg'
import HeadBand from '@/assets/svgs/head.svg'
import Court from '@/assets/svgs/tennis-court.svg'
</script>

<template>
  <section class="services">
    <div class="grid">
      <h2 class="services__title">{{ $t('Our services for you') }}</h2>
      <div class="services__container">
      <TsService :title="$t('Court rental per hour')" price="12.00 €">
          <template #svg>
            <Court class="icon" />
          </template>
        </TsService>
        <TsService :title="$t('Racquet rental per hour')" price="4.00 €">
          <template #svg>
            <Racket class="icon" />
          </template>
        </TsService>
        <TsService :title="$t('Ball rental per hour')" price="2.00 €">
          <template #svg>
            <TennisBall class="icon" />
          </template>
        </TsService>
        <!-- <TsService :title="$t('Head Tour balls')" :additional-info="$t('3 pieces')" price="10.00 €">
          <template #svg>
            <HeadBand class="icon" />
          </template>
        </TsService> -->
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.services {
  padding-block: 60px;
  background-color: var(--color-iceberg)
    /* rgba(31, 33, 48, 0.541) */
  ;

  &__title {
    grid-column: 1/-1;
    color: var(--color-black);
    font-size: 36px;
    font-family: var(--font-secondary);
    padding-bottom: 32px;
  }

  &__container {
    grid-column: 1/-1;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 64px;

    @include mq('tablet-lg') {
      grid-template-columns: 1fr 1fr;
    }

    @include mq('tablet') {
      grid-template-columns: 1fr;
    }
  }
}

.icon {
  width: 50px;
  height: 50px;
}
</style>
