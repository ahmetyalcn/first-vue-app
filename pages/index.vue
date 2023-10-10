<script setup>
const { data, error, execute, pending, status } = await useLazyFetch('https://jsonplaceholder.typicode.com/posts/')
const toast = useToast();
const store = useMainStore()
useHead({
  title: "AddYourNote"
})


</script>

<template>
  <div class="flex justify-between">
     <SideMenu/>
  <section class="w-1/3 p-16 ml-[33vw]">
      <div v-if="pending">
    <UNotification title="Loading" class="right-0 bottom-0 w-1/3" />
  </div>

  <div v-else class="flex justify-center">
    <div class="p-4 w-full min-h-[80h] flex flex-col border-2 border-green">
      <AddNote />
    <br/>
      <ul class="">
         <li v-for="d in store.getNotes" class="dark:text-yellow py-3 border-2 px-2 border-green mb-2">
        {{ d }}
    
      </li>
      </ul>
     
    </div>

  </div>
  </section>
  <div class="w-1/3 p-4">
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