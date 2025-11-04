<template>
  <div class="min-h-screen flex flex-col">
    <!-- Navigation -->
    <Navbar />
    
    <!-- Main Content -->
    <main class="flex-grow">
      <slot />
    </main>
    
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
// Default layout for all pages
</script>

