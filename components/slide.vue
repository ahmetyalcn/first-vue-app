<script setup>
    const isOpen = ref(false)
</script>

<template >
    <div class="md:hidden block">
        <div class="text-green cursor-pointer" @click="isOpen = true">
        <IconsSolidBar class="text-2xl"/>
        </div>
        <USlideover v-model="isOpen">
            <SideMenu/>
        </USlideover>
    </div>
</template>

<style scoped></style>