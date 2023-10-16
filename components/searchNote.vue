<template>
    <div class="w-full text-brown md:pt-[20vh] px-4 md:px-4 border-t-2 border-white pt-4">
        <UInput icon="i-heroicons-magnifying-glass-20-solid" size="lg" color="green" :trailing="true" name="input"
            placeholder="Search by title" class="md:w-1/3 border-2 rounded-md dark:border-[#38BDF8]" @input="searchNote"/>
<div v-for="(d) in data" class="dark:border-[#38BDF8] border-2 p-3 md:w-1/3 mt-2">
                 <p class="font-bold dark:text-white">{{ d.title }}</p>
          <p class="dark:text-white"> {{ d.content }}</p>
     

</div>
    </div>
</template>
<script setup>
const store = useMainStore()
let data = ref([])
const searchNote =(e)=>{
    const val = e.target.value.toLowerCase();
    if(val !== undefined && val !== null && val.trim() !== ""){
       data.value = store.notes.filter(note=>note.title.toLowerCase().includes(val)) 
    }else{
        data.value = []
    }
    
    console.log(data)
}
</script>
<style></style>