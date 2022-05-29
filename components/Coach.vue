<script setup></script>

<template>
  <section class="coach">
    <div class="grid">
      <div class="coach__description">
        <h2 class="coach__title">Coach Oliver</h2>
        <p>
          Oliver is a strong and experienced coach with international coaching
          licenses (DTB, USPTR, ZTTH) and regularly takes part in further
          training courses.
        </p>
        <p>
          He has been camp manager and trainer at Hannes Zischka Sportreisen
          since 2000.
        </p>
        <p>
          He works with many children and teenagers in tennis club TK Bosutsko
          in Osijek.
        </p>
        <p>
          Oliver regularly organizes and directs tournaments and also takes part in
          championships himself.
        </p>
      </div>
      <div class="coach__img"><img src="/images/couch.png" alt="" /></div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.coach {
  padding-block: 40px;
  &__title {
    grid-column: 1/7;
    color: var(--color-black);
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
  &__img {
    grid-column: 8/13;
  }

  &__description {
    grid-column: 1/7;
    font-size: 18px;

    > p {
        padding-bottom: 20px;
    }
  }
}
</style>
