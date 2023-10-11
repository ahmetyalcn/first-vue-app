<script setup>
const { data, error, execute, pending, status } = await useLazyFetch('https://jsonplaceholder.typicode.com/posts/')
const toast = useToast();

useHead({
  title: "AddYourNote"
})

</script>

<template>
  <div class="flex md:justify-between flex-col md:flex-row justify-center ">
    
    <MainMenu />
    <div class="w-[33vw] p-4">
      yan
    </div>
  </div>
</template>


<style>
::-webkit-scrollbar {
  display: none;
}

body {
  overflow-y: scroll;
}
</style>