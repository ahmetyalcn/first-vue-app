<template>
    <div class="md:w-[25vw] w-[100vw]  md:h-[90vh] p-16 bg-[#AA9D8B] overflow-y-auto ">
        <ul>
            <NuxtLink  v-for="(d, index) in data" :key="index" :to="d.url">
                <li class="md:mb-10 mb-5 w-1/3 dark:text-brown p-2 font-bold ">

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
            name: "About",
            url: "/about"
        },
        {
            name: "Home",
            url: "/"
        },
        {
            name: "Url1",
            url: "/new"
        },
        {
            name: "Url1",
            url: "/new"
        }
    ]
)
</script>
<style scoped>
 .router-link-active li {
  border-left:solid 5px #431D23;
}

</style>
