<template>
    
    <div class="md:w-[25vw] w-[100vw] h-[100vh] md:h-[90vh] p-4 md:p-16 bg-[#AA9D8B] dark:bg-[#0F172A] overflow-y-auto">

        <ul >
           
            <NuxtLink  v-for="(d, index) in data" :key="index" :to="d.url">
                <li class="md:mb-10 mb-5 w-1/3  text-brown dark:text-[#38BDF8] p-2 font-semibold ">

                    {{ d.name }}

                </li>
            </NuxtLink>

        </ul>
    </div>
</template>
<script setup>
const data = ref(
    [
        {
            name: "Home",
            url: "/"
        },
        {
            name: "About",
            url: "/about"
        },

    ]
)
</script>
<style scoped>
 .router-link-active li {
  border-left:solid 5px #F5F4E4;
  font-weight: 700;
}

</style>
