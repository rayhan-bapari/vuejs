<template>
    <footer
        class="tw-mt-auto tw-flex tw-w-full tw-place-content-around tw-gap-3 tw-p-[5%] tw-px-[10%] tw-text-white max-md:tw-flex-col">
        <div class="tw-flex tw-h-full tw-w-[250px] tw-flex-col tw-place-items-center tw-gap-6 max-md:tw-w-full">
            <img src="/logo/logo.png" alt="logo" srcset="" class="tw-max-w-[120px]" />
            <div>
                {{ address }}
            </div>
            <div class="tw-mt-3 tw-text-lg tw-font-semibold">Follow us</div>
            <div class="tw-flex tw-gap-4 tw-text-2xl">
                <a :href="fb" aria-label="Facebook">
                    <i class="bi bi-facebook"></i>
                </a>
                <a :href="x" aria-label="Instagram">
                    <i class="bi bi-instagram"></i>
                </a>
                <a :href="ins" aria-label="LinkedIn">
                    <i class="bi bi-linkedin"></i>
                </a>
            </div>
        </div>

        <div class="tw-flex tw-h-full tw-w-[250px] tw-flex-col tw-gap-4">
            <h2 class="tw-text-3xl max-md:tw-text-xl">Resources</h2>
            <div class="tw-flex tw-flex-col tw-gap-3 max-md:tw-text-sm">
                <a href="" class="footer-link">About us</a>
                <a href="" class="footer-link">FAQ</a>
                <a href="" class="footer-link">Contact Us</a>
                <a href="" class="footer-link">Blogs</a>
                <a href="" class="footer-link">Privacy policy</a>
            </div>
        </div>
    </footer>
</template>

<script setup>
defineProps([
    'fb',
    'x',
    'ins',
    'address'
])
</script>

<style scoped></style>
