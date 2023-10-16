<script setup>

useHead({
  title: "AddYourNote"
})

</script>

<template>
  <div class="flex flex-col md:flex-row  w-full">
    
    <MainMenu />
      <SearchNote/>
  
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