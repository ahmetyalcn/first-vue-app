<script setup>
const store = useMainStore()
</script>
<template>
    <div>
        <ul class="">
         <li v-for="d in store.getNotes" class="dark:text-yellow py-3 border-2 px-2 border-green mb-2 flex justify-between ">
          <p> {{ d.title }}</p>
          <div @click="store.deleteNote(d.id)" class="h-auto rounded-sm flex justify-center items-center cursor-pointer w-auto bg-red-500">
              <IconsDelete class="text-white text-xl"/>
       
          </div>
        
    
      </li>
      </ul>
    </div>
</template>