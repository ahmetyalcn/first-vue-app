<template>
  <div>
    <NuxtLayout>
      <Header class="md:fixed bg-[#D0D7B4] dark:bg-[#0F172A] md:mb-10 z-10" />
      <div class="flex md:flex-row ">
        <SideMenu class="hidden md:block md:fixed mt-[10vh]" />
        <NuxtPage keepalive class=" md:ml-[25vw] bg-[#F5F4E4] dark:bg-[#334155] min-h-[100vh]" />

      </div>
      <UNotifications />

    </NuxtLayout>

  </div>
</template>
