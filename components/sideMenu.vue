<template>
    <div class="w-1/3  h-[90vh] p-16  overflow-y-auto fixed">
        <ul>
            <NuxtLink  v-for="(d, index) in data" :key="index" :to="d.url">
                <li class="mb-5 bg-green rounded-md p-2 dark:text-black font-bold ">

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
            name: "Url1",
            url: "/new"
        },
        {
            name: "Url1",
            url: "/new"
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