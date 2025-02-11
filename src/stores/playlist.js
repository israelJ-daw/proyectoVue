import { defineStore } from "pinia";

export const usePlaylistStore = defineStore("playlist", {
  state: () => ({
    playlist: [],
  }),
  getters: {
    isInPlaylist: (state) => (id) => state.playlist.some(song => song.id === id),
  },
  actions: {
    addToPlaylist(song) {
      this.playlist.push(song);
    },
    removeFromPlaylist(id) {
      this.playlist = this.playlist.filter(song => song.id !== id);
    },
  },
});
