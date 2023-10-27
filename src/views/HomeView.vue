
<template>
  <main class="container text-white">
    <div class="pt-4 mb-8 relative">
      <input type="text" v-model="searchQuery" @input="getSearchResults" placeholder="Procure uma cidade ou estado"
        class="py-2 px-1 w-full bg-transparent border-b focus:border-weather-secondary focus:outline-none focus:shadow-[0px_1px_0_0_#004E71]">
      <ul class="absolute bg-weather-secondary text-white w-full shadow-md py-2 px-1 top-[66px]" v-if="mapBoxSearchResults">
        <li v-for="searchResult in mapBoxSearchResults" :key="searchResult.id" class="py-2 cursor-pointer">
          {{ searchResult.place_name }}
        </li>
      </ul>
    </div>
  </main>
</template>


<script setup>
import { ref } from 'vue';
import axios from 'axios';

const searchQuery = ref("");
const queryTimeout = ref(null);
const mapBoxAPIKey = "pk.eyJ1IjoicmVkcm9kcmlnbyIsImEiOiJjbGd1eDh4am8wazUyM2VwZGczY256M3ZiIn0.qYQD68cqHPCgRyMYRICHCg";
const mapBoxSearchResults = ref(null);

const getSearchResults = () => {
  clearTimeout(queryTimeout.value);
  queryTimeout.value = setTimeout(async () => {
    if (searchQuery.value !== "") {
      const result = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${searchQuery.value}.json?access_token=${mapBoxAPIKey}&types=place`);
      mapBoxSearchResults.value = result.data.features;
      console.log(mapBoxSearchResults.value);
      return;
    }
    mapBoxSearchResults.value = null;
  }, 300);
};
</script>
