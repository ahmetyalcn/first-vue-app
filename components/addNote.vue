<script setup>
    const store = useMainStore();
    const val = ref("");

    const sendData =()=>{
        store.addNote(val.value);
        val.value = '';
    }
    
</script>
<template>
    <div>
        <UInput @keydown.enter="sendData" v-model="val" class="" placeholder="add new note..." />
        <UButton class="bg-green dark:bg-green m-1 float-right" @click="sendData">Add</UButton>    
    </div>
</template>