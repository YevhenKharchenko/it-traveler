<template>
  <main class="flex h-screen">
    <section class="flex-1 flex justify-center items-center px-5 bg-primary">
      <div class="text-white max-w-[500px] w-full">
        <slot></slot>
      </div>
    </section>
    <section class="flex-1">
      <img class="h-full object-cover w-full" src="../assets/img/static-map.webp" alt="" />
    </section>
  </main>
</template>
