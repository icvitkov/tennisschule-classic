<script setup>
import TsAdvantages from './shared/TsAdvantages.vue'
</script>

<template>
  <div class="advantages" id="info">
    <div class="grid">
      <TsAdvantages
        :title="$t('Tennis at the Bretanide Sport & Wellness Resort')"
        img="/images/court.jpg"
        class="advantages__item"
      >
        <template #description>
          <p>
            {{
              $t(
                'Right next to the hotel there are 5 beautifully situated clay  tennis courts. Hannes Zischka Sportreisen has been offering tennis lessons for all levels for more than 25 years. The popular weekly camps are on the program in spring and autumn, and in the summer months ( 15.6. – 31.8. ) tennis lessons are booked and organized individually on site by Tennis school Oliver Jankovic. The Bretanide Sport & Wellness Resort is also a very popular place for groups, clubs and tennis schools to spend a few tennis days by the sea.'
              )
            }}
          </p>
        </template>
      </TsAdvantages>

      <TsAdvantages
        :title="$t('The Hotel Bretanide')"
        img="/images/betanide.jpg"
        class="advantages__item"
      >
        <template #description>
          <p>
            {{
              $t(
                'The Bretanide Sport & Wellness Resort**** offers its guests the finest all-inclusive holiday. There are direct flights to the island from Austria, and a transfer from Split Airport to the hotel is also available. The hotel offers three pools and its own beach. In addition to the hotel restaurant, guests can choose from other specialty restaurants that prepare local delicacies on an open fireplace.'
              )
            }}
          </p>
        </template>
      </TsAdvantages>

      <TsAdvantages
        :title="$t('The island of Brač')"
        img="/images/brac.jpg"
        class="advantages__item"
      >
        <template #description>
          <p>
            {{
              $t(
                "Between the Dalmatian capital of Split and the island of Hvar lies the third largest Adriatic island of Brac. The island is famous for what is considered by many to be the most beautiful beach in Croatia: 'Zlatni Rat', (the Golden horn). This beautiful sandy beach is located directly in front of the Sport & Wellness Resort Bretanide and is a destination for many guests. Away from the tennis court, the island is ideal for hikers, cyclists and water sports enthusiasts. Nothing stands in the way of a great active holiday."
              )
            }}
          </p>
        </template>
      </TsAdvantages>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.advantages {
  background-color: var(--color-iceberg);
  color: var(--color-gray);
  padding-block: 40px;

  &__item {
    grid-column: 1/-1;
  }
}
</style>
