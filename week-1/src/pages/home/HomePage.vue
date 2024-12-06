<template>
    <Header />

    <Hero />

    <Brand />

    <Coding />

    <VersionControl />

    <Feature />

    <Client />

    <Pricing />

    <Article />

    <Newsletter />

    <Footer fb="https://www.facebook.com/xyz" x="https://x.com/@xyz" ins="https://instagram.com/@xyz"
        address="2 Lord Edward St, D02 P634, United States" />
</template>

<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Hero from '@/components/home/Hero.vue';
import Brand from '@/components/Brand.vue';
import Coding from '@/components/home/Coding.vue';
import Feature from '@/components/home/VersionControl.vue';
import VersionControl from '@/components/home/VersionControl.vue';
import Client from '@/components/Client.vue';
import Pricing from '@/components/home/Pricing.vue';
import Article from '@/components/home/Article.vue';
import Newsletter from '@/components/Newsletter.vue';
</script>

<style scoped></style>
