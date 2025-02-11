<template>
  <div>
    <h1>Búsqueda de canciones en Deezer</h1>
    <SearchBar @results="handleResults" />
    <hr />
    <div class="filters">
      <label>
        <input type="checkbox" v-model="sortAscending" aria-label="Ordenar ascendente" />
        Ordenar por nombre (ascendente)
      </label>

      <label>
        Duración mínima:
        <input type="number" v-model="minDuration" placeholder="Ejemplo: 100" aria-label="Filtrar por duración" />
      </label>
    </div>

    <!-- Lista de canciones -->
    <ol v-if="songs.length > 0">
      <li v-for="song in filteredAndSortedSongs" :key="song.id">
        <img :src="song.album.cover_medium" :style="{ width: '86px' }" />
        <strong>Título: {{ song.title }}</strong> - Artista: {{ song.artist.name }} - Álbum: {{ song.album.title }} - Minutos: {{ (song.duration / 60).toFixed(2) }}

        <!-- Botón de añadir/eliminar -->
        <span 
          @click="toggleFavorite(song)" 
          class="heart" 
          :class="{ favorite: playlistStore.isInPlaylist(song.id) }"
        >
          <button>{{ playlistStore.isInPlaylist(song.id) ? 'Eliminar' : 'Añadir' }}</button>
        </span>
      </li>
    </ol>
    <p v-else>No hay resultados para mostrar</p>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import SearchBar from "../components/SearchBar.vue";
import { usePlaylistStore } from "@/stores/playlist";

const songs = ref([]);
const sortAscending = ref(false);
const minDuration = ref(0);
const playlistStore = usePlaylistStore();

// Lista filtrada y ordenada
const filteredAndSortedSongs = computed(() => {
  let result = [...songs.value];

  if (minDuration.value > 0) {
    result = result.filter(song => song.duration && song.duration >= minDuration.value);
  }

  if (sortAscending.value) {
    result.sort((a, b) => a.title.localeCompare(b.title));
  } else {
    result.sort((a, b) => b.title.localeCompare(a.title));
  }

  return result;
});

const handleResults = (data) => {
  songs.value = data;
};

// Función para añadir/quitar canciones de la playlist
const toggleFavorite = (song) => {
  if (playlistStore.isInPlaylist(song.id)) {
    playlistStore.removeFromPlaylist(song.id);
  } else {
    playlistStore.addToPlaylist(song);
  }
};
</script>

<style scoped>
.heart {
  cursor: pointer;
  font-size: 20px;
  margin-left: 10px;
  color: black; /* Por defecto negro */
  transition: color 0.2s ease-in-out;
}

.heart.favorite {
  color: red; /* Si está en la playlist, se vuelve rojo */
}
</style>
