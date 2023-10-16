<script setup>
    const isOpen = ref(false)
</script>

<template >
    <div class="sm:hidden block relative z-20">

        <div class="text-brown dark:text-[#38BDF8] cursor-pointer " @click="isOpen = true">
        <IconsSolidBar class="text-2xl"/>
        </div>
        <USlideover v-model="isOpen" prevent-close>
            <UButton color="brown" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="right-2 top-2 absolute dark:text-[#38BDF8]" @click="isOpen = false" />
            <SideMenu class=""/>
        </USlideover>
    </div>
</template>

<style scoped>
.i-heroicons-x-mark-20-solid{
   width: 20px !important;
}
</style>