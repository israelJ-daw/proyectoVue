<template>
    <nav class="navbar">
      <div class="container">
        <!-- Logo -->
        <router-link to="/" class="logo">🎵 Deezer Client</router-link>
        
        <!-- Menú de navegación -->
        <ul class="nav-links">
          <li><router-link to="/" class="nav-link">Home</router-link></li>
          <li><router-link to="/playlists" class="nav-link">Playlists</router-link></li>
          <li><router-link to="/search" class="nav-link">Buscador</router-link></li>
        </ul>
        
        <!-- Usuario -->
        <div class="user-section">
          <img v-if="user.avatar" :src="user.avatar" alt="Avatar" class="avatar" />
          <span class="username">{{ user.name || "Invitado" }}</span>
          <button v-if="user.name" @click="logout" class="logout-btn">Cerrar sesión</button>
        </div>
      </div>
    </nav>
  </template>
  
  <script setup>
  import { computed } from "vue";
  import { useUserStore } from "@/stores/user";
  
  const userStore = useUserStore();
  const user = computed(() => userStore.user);
  
  const logout = () => {
    userStore.logout();
  };
  </script>
  
  <style scoped>
  .navbar {
    background: linear-gradient(to right, #ff512f, #dd2476);
    padding: 1rem 0;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }
  .logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
    text-decoration: none;
  }
  .nav-links {
    display: flex;
    gap: 20px;
    list-style: none;
  }
  .nav-link {
    color: white;
    text-decoration: none;
    font-weight: 500;
    transition: 0.3s;
  }
  .nav-link:hover {
    text-decoration: underline;
  }
  .user-section {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px solid white;
  }
  .username {
    color: white;
    font-weight: 500;
  }
  .logout-btn {
    background: none;
    border: none;
    color: white;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
  }
  .logout-btn:hover {
    text-decoration: underline;
  }
  </style>
  