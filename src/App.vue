<template>
  <div class="app-container">
    <!-- Navbar -->
    <Navbar />

    <!-- Contenido de la página -->
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
</script>

<style scoped lang="postcss">
/* Aplica estilos usando Tailwind correctamente */
.app-container {
  @apply min-h-screen bg-gray-900 text-white flex flex-col;
}

.main-content {
  @apply flex-1 container mx-auto p-6;
}
</style>
