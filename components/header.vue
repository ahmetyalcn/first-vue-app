<script setup>

const colorMode = useColorMode();

const isDark = computed({
  get () {
    return colorMode.value === 'dark'
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})
</script>


<template>
  <div class="w-full h-[10vh] px-16 py-4 flex justify-between md:flex-row flex-col items-baseline">
    <p class="text-2xl font-bold text-green">AddYourNote</p>
    <ul class="flex gap-8">
      <NuxtLink class="text-green font-semibold" to="/">Home</NuxtLink>
      <NuxtLink class="text-green font-semibold" to="/about">About</NuxtLink>
      <NuxtLink class="text-green font-semibold" to="/contact">Contact</NuxtLink>
    </ul>


<div class="flex items-center gap-4">
  <ClientOnly>
    <UButton
      :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
      class="text-green dark:text-green"
      variant="ghost"
      aria-label="Theme"
      @click="isDark = !isDark"
    />

    <template #fallback>
      <div class="w-8 h-8" />
    </template>
  </ClientOnly>
  <Slide/>
</div>
 

  </div>
</template>
<style scoped>
 .router-link-active {
  border-bottom:solid 3px #03B771;
}
 .router-link-exact-active {
  border-bottom:solid 3px #03B771;
}
</style>
