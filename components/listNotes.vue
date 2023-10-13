<script setup>
const store = useMainStore()

onMounted(async () => {
  await store.getAllNotes();
});
</script>
<template>
    <div>
        <ul class="">
         <li v-for="d in store.notes" class="dark:text-brown py-3 border-2 px-2 border-brown mb-2 flex justify-between ">
            <div>
                 <p class="font-bold"> {{ d.title }}</p>
          <p> {{ d.content }}</p>
            </div>
         
          <div @click="store.deleteNote(d.id)" class="h-auto rounded-sm flex justify-center items-center cursor-pointer w-auto bg-red-500">
              <IconsDelete class="text-white text-xl"/>
       
          </div>
        
    
      </li>
      </ul>
    </div>
</template>