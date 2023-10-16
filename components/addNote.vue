<script setup>

    const store = useMainStore();
    const val = reactive({
        title: null,
        content: null
    });
    const toast = useToast()

    const sendData =()=>{
        console.log(val)
        if (val.content.length>0) {
           store.addNote(val);
        val.content = null;
        val.title=null
        }else{
            console.log(toast.add)
            toast.add({ title: 'Boş bırakılamaz', timeout: 1000 })
        }
        
    }
    
</script>
<template>
    <div>
        <UInput v-model="val.title" class="" placeholder="Title" />
        <UInput @keydown.enter="sendData" v-model="val.content" class="" placeholder="Add new note.." />
        <UButton class="bg-brown text-white m-1 float-right" @click="sendData">Add</UButton>    
    </div>
</template>