<template>
    <header class="lg:tw-justify-around tw-max-w-lg:tw-px-4 tw-max-w-lg:tw-mr-auto tw-absolute tw-top-0 tw-z-20 tw-flex tw-h-[60px] tw-w-full tw-bg-opacity-0 tw-px-[5%]
                    tw-text-white">
        <a class="tw-h-[50px] tw-w-[50px] tw-p-[4px]" href="">
            <img src="/logo/logo.png" alt="logo" class="tw-object tw-h-full tw-w-full" />
        </a>
        <div class="collapsible-header animated-collapse max-lg:tw-shadow-md" id="collapsed-header-items">
            <div
                class="tw-flex tw-h-full tw-w-max tw-gap-5 tw-text-base tw-text-white max-lg:tw-mt-[30px] max-lg:tw-flex-col max-lg:tw-place-items-end max-lg:tw-gap-5 lg:tw-mx-auto lg:tw-place-items-center">
                <a class="header-links" href=""> About us </a>
                <a class="header-links" href="#pricing"> Pricing </a>
                <a class="header-links" href=""> Features </a>
                <a class="header-links" href=""> Company </a>
            </div>
            <div
                class="tw-mx-4 tw-flex tw-place-items-center tw-gap-[20px] tw-text-base max-md:tw-w-full max-md:tw-flex-col max-md:tw-place-content-center">
                <a href="" aria-label="signup"
                    class="tw-rounded-full tw-bg-secondary tw-px-3 tw-py-2 tw-text-white tw-transition-transform tw-duration-[0.3s] hover:tw-translate-x-2">
                    <span>Get started</span>
                    <i class="bi bi-arrow-right"></i>
                </a>
            </div>
        </div>
        <button class="bi bi-list tw-absolute tw-right-3 tw-top-3 tw-z-50 tw-text-3xl tw-text-white lg:tw-hidden"
            onclick="toggleHeader()" aria-label="menu" id="collapse-btn"></button>
    </header>
</template>

<script setup>
// initialization

const RESPONSIVE_WIDTH = 1024

let headerWhiteBg = false
let isHeaderCollapsed = window.innerWidth < RESPONSIVE_WIDTH
const collapseBtn = document.getElementById("collapse-btn")
const collapseHeaderItems = document.getElementById("collapsed-header-items")



function onHeaderClickOutside(e) {

    if (!collapseHeaderItems.contains(e.target)) {
        toggleHeader()
    }

}


function toggleHeader() {
    if (isHeaderCollapsed) {
        // collapseHeaderItems.classList.remove("max-md:tw-opacity-0")
        collapseHeaderItems.classList.add("opacity-100",)
        collapseHeaderItems.style.width = "60vw"
        collapseBtn.classList.remove("bi-list")
        collapseBtn.classList.add("bi-x", "max-lg:tw-fixed")
        isHeaderCollapsed = false

        setTimeout(() => window.addEventListener("click", onHeaderClickOutside), 1)

    } else {
        collapseHeaderItems.classList.remove("opacity-100")
        collapseHeaderItems.style.width = "0vw"
        collapseBtn.classList.remove("bi-x", "max-lg:tw-fixed")
        collapseBtn.classList.add("bi-list")
        isHeaderCollapsed = true
        window.removeEventListener("click", onHeaderClickOutside)

    }
}

function responsive() {
    if (window.innerWidth > RESPONSIVE_WIDTH) {
        collapseHeaderItems.style.width = ""

    } else {
        isHeaderCollapsed = true
    }
}

window.addEventListener("resize", responsive)


/**
 * Animations
 */

gsap.registerPlugin(ScrollTrigger)


gsap.to(".reveal-up", {
    opacity: 0,
    y: "100%",
})

gsap.to("#dashboard", {
    boxShadow: "0px 15px 25px -5px rgba(170,49,233,0.44021358543417366)",
    duration: 0.3,
    scrollTrigger: {
        trigger: "#hero-section",
        start: "60% 60%",
        end: "80% 80%",
        // markers: true
    }

})


// ------------- reveal section animations ---------------

const sections = gsap.utils.toArray("section")

sections.forEach((sec) => {

    const revealUptimeline = gsap.timeline({
        paused: true,
        scrollTrigger: {
            trigger: sec,
            start: "10% 80%", // top of trigger hits the top of viewport
            end: "20% 90%",
            // markers: true,
            // scrub: 1,
        }
    })

    revealUptimeline.to(sec.querySelectorAll(".reveal-up"), {
        opacity: 1,
        duration: 0.8,
        y: "0%",
        stagger: 0.2,
    })


})

</script>

<style scoped></style>
