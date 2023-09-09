<template>
    <Transition enter-from-class="opacity-0 translate-x-full overflow-hidden" enter-to-class="opacity-100 -translate-x-0 overflow-hidden"
      leave-class="opacity-100 -translate-x-0"
      leave-to-class="opacity-0 translate-x-full">
        <div v-show="open" class="h-screen w-2/4 bg-[#202020] absolute z-20 right-0 top-0 transition-all ease-in-out duration-500">
            <svg @click="open = !open" xmlns="http://www.w3.org/2000/svg" class="text-white h-6 w-6 absolute top-5 right-4" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M18 6l-12 12" />
                <path d="M6 6l12 12" />
            </svg>
            <nav class="mt-8">
                <ul class="flex flex-col">
                    <li class="py-3 px-6">
                        <a href="" class="text-white block">Discord</a>
                    </li>
                    <li class="py-3 px-6">
                        <a href="" class="text-white block">GitHub</a>
                    </li>
                    <li class="py-3 px-6">
                        <NuxtLink to="/login" class="text-white text-sm underline">Login</NuxtLink>
                    </li>
                    <li class="py-3 px-6">
                        <NuxtLink to="/register" class="text-white bg-darkBlue rounded px-5 py-2 text-sm">Register</NuxtLink>
                    </li>
                </ul>
            </nav>
        </div>
    </Transition>
    <div class="container mx-auto relative overflow-hidden">
        <nav class="flex items-center justify-between px-4 mt-6">
            <span class="text-white text-lg md:text-xl font-bold tracking-wide">HackWeekly</span>
            <div class="text-white hidden md:flex items-center gap-24 font-normal">
                <a class="text-sm hover:text-gray-200 transition ease-in-out duration-150" href="" target="blank">Discord</a>
                <a class="text-sm hover:text-gray-200 transition ease-in-out duration-150" href="" target="blank">GitHub</a>
            </div>
            <div class="text-white hidden md:flex items-center gap-6 font-normal">
                <NuxtLink to="/login" class="text-white hidden md:block text-sm underline hover:text-gray-200 transition ease-in-out duration-150">Login</NuxtLink>
                <NuxtLink to="/register" class="text-white hidden md:block bg-darkBlue rounded px-5 py-2 text-sm hover:bg-opacity-90 transition ease-in-out duration-150">Register</NuxtLink>
            </div>
            <svg @click="open = !open" xmlns="http://www.w3.org/2000/svg" class="text-white h-7 w-7 block md:hidden z-0" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M4 6l16 0" />
                <path d="M4 12l16 0" />
                <path d="M4 18l16 0" />
            </svg>
        </nav>
    </div>
    
</template>
<script setup>
const open = ref(false)
</script>