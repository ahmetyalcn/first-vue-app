<script setup>
import { toDisplayString } from 'vue';

    const store = useMainStore();
    const val = ref("");
    const toast = useToast()

    const sendData =()=>{
        if (val.value.length>0) {
           store.addNote(val.value);
        val.value = ''; 
        }else{
            console.log(toast.add)
            toast.add({ title: 'Boş bırakılamaz', timeout: 1000 })
        }
        
    }
    
</script>
<template>
    <div>
        <UInput @keydown.enter="sendData" v-model="val" class="" placeholder="add new note..." />
        <UButton class="bg-brown text-white m-1 float-right" @click="sendData">Add</UButton>    
    </div>
</template>