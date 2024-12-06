<template>
    <section
        class="tw-flex tw-w-full tw-flex-col tw-place-content-center tw-place-items-center tw-gap-[10%] tw-p-[5%] tw-px-[10%]">
        <div class="tw-flex tw-w-full tw-flex-col tw-place-content-center tw-place-items-center tw-gap-3">
            <h2 class="tw-text-2xl tw-text-primary max-md:tw-text-xl">
                Special Newsletter signup
            </h2>
            <h2 class="tw-text-xl max-md:tw-text-lg">
                Keep yourself updated
            </h2>

            <div class="tw-flex tw-h-[60px] tw-place-items-center tw-gap-2 tw-overflow-hidden tw-p-2">
                <input v-model="email" type="email" name="email"
                    class="input tw-h-full tw-w-full tw-p-2 tw-outline-none" placeholder="email" />

                <button @click="subscribeNewsletter()" class="btn tw-transition-colors tw-duration-[0.3s]">
                    Subscribe
                </button>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');

function subscribeNewsletter() {
    console.log(email.value);
}

</script>

<style scoped></style>
