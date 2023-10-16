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
  <div class="w-full min-h-[10vh]  md:px-16 px-4 py-4 flex justify-between md:flex-row flex-col items-baseline dark:border-b-2 dark:border-white">
    <div class="flex justify-between w-full">
    <p class="text-2xl font-bold text-brown dark:text-[#38BDF8]">AddYourNote</p>
    <div class="flex gap-2 items-baseline">
  <ClientOnly>
    <UButton
      :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
      class="text-brown dark:text-[#38BDF8]"
      variant="ghost"
      aria-label="Theme"
      @click="isDark = !isDark"
    />

  </ClientOnly>
         <Slide/>
    </div>
 
  </div>
 


 

 

  </div>
</template>
