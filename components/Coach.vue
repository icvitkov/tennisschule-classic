<script setup></script>

<template>
  <section class="coach" id="coach">
    <div class="grid grid--mobile">
      <div class="coach__description">
        <h2 class="coach__title">{{ $t('Coach') }} Oliver</h2>
        <p>
          {{
            $t(
              'Oliver is a strong and experienced coach with international coaching licenses (DTB, USPTR, ZTTH) and regularly takes part in further training courses.'
            )
          }}
        </p>
        <p>
          {{
            $t(
              'He is a camp manager and trainer at Hannes Zischka Sportreisen since 2000.'
            )
          }}
        </p>
        <p>
          {{
            $t(
              'He works with many children and teenagers in tennis club TK Bosutsko in Osijek.'
            )
          }}
        </p>
        <p>
          {{
            $t(
              'Oliver regularly organizes and directs tournaments and also takes part in championships himself.'
            )
          }}
        </p>
      </div>
      <img src="/images/couch.png" alt="" class="coach__img" />
    </div>
  </section>

  <section class="coach coach--left">
    <div class="grid">
      <img
        src="/images/coach2.png"
        alt=""
        class="coach__img coach__img--left"
      />

      <div class="coach__description coach__description--left">
        <h2 class="coach__title">{{ $t('Coach') }} Marin</h2>
        <p>
          {{
            $t(
              'Marin is graduatde kinesiologist and tennis trainer with a license from the Croatian Tennis Association.'
            )
          }}
        </p>
        <p>
          {{
            $t(
              'He already has working experience in a tennis schools and camps organized by Hannes Zischka.'
            )
          }}
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.coach {
  padding-block: 80px;
  &--left {
    background-color: var(--color-iceberg);
  }
  &__title {
    grid-column: 1/7;
    color: var(--color-black);
    font-size: 40px;
    font-family: var(--font-secondary);
    padding-bottom: 32px;

    @include mq('tablet-lg') {
      grid-column: 1/-1;
    }
  }
  &__img {
    border-radius: 50%;
    height: 600px;
    width: 600px;
    object-fit: cover;
    background-color: var(--color-iceberg);
    grid-column: 8/13;
    @include mq('tablet-lg') {
      display: flex;
      grid-column: 1/-1;
      justify-self: center;
      margin-bottom: 40px;
    }


  @include mq('mobile') {
    height: 90vw;
    width: auto;
  }

    &--left {
      grid-column: 1/6;
      background-color: var(--color-white);

      @include mq('tablet-lg') {
        grid-column: 1/-1;
      }
    }
  }

  &__description {
    grid-column: 1/7;
    font-size: 18px;
    @include mq('tablet-lg') {
      grid-column: 1/-1;
    }

    &--left {
      grid-column: 7/13;
      @include mq('tablet-lg') {
        grid-column: 1/-1;
      }
    }

    > p {
      padding-bottom: 20px;
    }
  }
}

.grid--mobile {
  @include mq('tablet-lg') {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column-reverse;
    align-items: center;
    padding-inline: 20px;
    width: 100%;

    &--left {
      flex-direction: column;
    }
  }
}
</style>
