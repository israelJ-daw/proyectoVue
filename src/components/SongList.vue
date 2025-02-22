<template>
  <div class="song-list">
    <div
      v-for="(song, index) in songs"
      :key="song.id"
      class="song-item"
      @click="playSong(song.preview)"
    >
      <p>{{ song.title }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  songs: Array,
  playSong: Function,
});
</script>

<style scoped>
.song-list {
  margin-top: 20px;
}

.song-item {
  cursor: pointer;
  margin: 10px 0;
  padding: 10px;
  background-color: #f8f8f8;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.song-item:hover {
  background-color: #e0e0e0;
}
</style>
