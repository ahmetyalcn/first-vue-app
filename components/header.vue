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
  <div class="w-full min-h-[10vh]  md:px-16 px-4 py-4 flex justify-between md:flex-row flex-col items-baseline">
    <div class="flex justify-between w-full">
    <p class="text-2xl font-bold text-[#431D23]">AddYourNote</p>
    <div class="flex gap-2 items-baseline">
  <ClientOnly>
    <UButton
      :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
      class="text-green dark:text-green"
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
