<script setup>
const store = useMainStore()

onMounted(async () => {
  await store.getAllNotes();
});
</script>
<template>
    <div>
        <ul class="">
         <li v-for="d in store.notes" class="dark:text-latte py-3 border-2 px-2 border-gray-300 dark:border-[#38BDF8] rounded-sm mb-2 flex justify-between ">
            <div>
                 <p class="font-bold"> {{ d.title }}</p>
          <p> {{ d.content }}</p>
            </div>
         
          <div @click="store.deleteNote(d)" class="rounded-sm flex justify-center items-center cursor-pointer my-auto  h-8 w-8 bg-red-500">
              <IconsDelete class="text-white text-xl"/>
       
          </div>
        
    
      </li>
      </ul>
    </div>
</template>