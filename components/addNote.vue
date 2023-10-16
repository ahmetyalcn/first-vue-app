<script setup>

    const store = useMainStore();
    const val = reactive({
        title: null,
        content: null
    });
    const toast = useToast()

    const sendData =()=>{
        console.log(val)
        if (val.content?.length>0) {
           store.addNote(val);
        val.content = null;
        val.title=null
        }else{
            console.log(toast.add)
            toast.add({ title: "Note can't be empty", timeout: 1000,color:"red" })
        }
        
    }
    
</script>
<template>
    <div>
        <UInput v-model="val.title" class="font-bold mb-2" icon="i-heroicons-pencil-square"  placeholder="Title" size="lg" />
  
        <UInput @keydown.enter="sendData" v-model="val.content" class="" size="lg" placeholder="Add new note.." />
        <UButton class="bg-brown dark:text-white dark:bg-[#38BDF8] text-white m-1 px-5 float-right" @click="sendData">Add</UButton>    
    </div>
</template>