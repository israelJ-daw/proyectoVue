<template>
  <div class="home-container">
    <!-- Sección de bienvenida -->
    <header class="welcome-section">
      <h1>Bienvenido a Deezer Music Client</h1>
      <p>Explora y disfruta de tu música favorita :D</p>
    </header>

    <!-- Carrusel de artistas más escuchados -->
    <div class="carousel-container">
      <Swiper
        :modules="[Navigation, Pagination, Autoplay]"
        :slides-per-view="3"
        :space-between="30"
        :loop="true"
        :autoplay="{ delay: 3000, disableOnInteraction: false }"
        navigation
        pagination
      >
        <SwiperSlide v-for="artist in topArtists" :key="artist.id">
          <img :src="artist.picture_big" :alt="artist.name" class="artist-image" />
          <p class="artist-name">{{ artist.name }}</p>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const topArtists = ref([]);

onMounted(async () => {
  const res = await fetch("https://api.deezer.com/chart");
  const data = await res.json();
  topArtists.value = data.artists.data.slice(0, 10);
});
</script>

<style scoped>
.home-container {
  text-align: center;
  padding: 40px;
  background: #fafafa;
}

.welcome-section h1 {
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
}

.welcome-section p {
  font-size: 1.2rem;
  color: #555;
}

.carousel-container {
  margin-top: 30px;
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.artist-image {
  width: 100%;
  border-radius: 10px;
  transition: transform 0.3s;
}

.artist-image:hover {
  transform: scale(1.05);
}

.artist-name {
  margin-top: 10px;
  font-weight: bold;
}
</style>
