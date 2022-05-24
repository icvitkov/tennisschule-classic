<script setup>
    import TsAdvantages from './shared/TsAdvantages.vue';
</script>

<template>
<div class="advantages">
    <div class="grid">
        <TsAdvantages title="Tenis u Bretanide Sport & Wellness Resortu" img="assets/images/court.jpg" class="advantages__item">
            <template #description>
                <p>Odmah do hotela nalazi se 5 lijepo smještenih zemljanih teniskih terena. Hannes Zischka Sportreisen nudi sate tenisa za sve razine više od 25 godina. Popularni tjedni kampovi na programu su u proljeće i jesen, a tijekom ljetnih mjeseci ( 15.6.- 31.8.) satovi tenisa se rezerviraju i organiziraju individualno na licu mjesta u Tenis školi Oliver Janković. Bretanide Sport & Wellness Resort također je vrlo popularno mjesto za grupe, klubove i škole tenisa za nekoliko teniskih dana uz more.</p>
            </template>
        </TsAdvantages>

        <TsAdvantages title="Hotel Bretanide" img="assets/images/betanide.jpg" class="advantages__item">
            <template #description>
                <p>Odmah do hotela nalazi se 5 lijepo smještenih zemljanih teniskih terena. Hannes Zischka Sportreisen nudi sate tenisa za sve razine više od 25 godina. Popularni tjedni kampovi na programu su u proljeće i jesen, a tijekom ljetnih mjeseci ( 15.6.- 31.8.) satovi tenisa se rezerviraju i organiziraju individualno na licu mjesta u Tenis školi Oliver Janković. Bretanide Sport & Wellness Resort također je vrlo popularno mjesto za grupe, klubove i škole tenisa za nekoliko teniskih dana uz more.</p>
            </template>
        </TsAdvantages>
        
        <TsAdvantages title="Otok Brač" img="assets/images/brac.jpg" class="advantages__item">
            <template #description>
                <p>Odmah do hotela nalazi se 5 lijepo smještenih zemljanih teniskih terena. Hannes Zischka Sportreisen nudi sate tenisa za sve razine više od 25 godina. Popularni tjedni kampovi na programu su u proljeće i jesen, a tijekom ljetnih mjeseci ( 15.6.- 31.8.) satovi tenisa se rezerviraju i organiziraju individualno na licu mjesta u Tenis školi Oliver Janković. Bretanide Sport & Wellness Resort također je vrlo popularno mjesto za grupe, klubove i škole tenisa za nekoliko teniskih dana uz more.</p>
            </template>
        </TsAdvantages>
    </div>
</div>
</template>

<style lang='scss' scoped>
.advantages {
    background-color: #eee;
    color: var(--color-gray);
    padding-block: 40px;

    &__item {
        grid-column: 1/-1;
    }
}
</style>