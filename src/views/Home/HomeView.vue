
<template>
  <main class="container text-white">
    <div class="pt-4 mb-8 relative">
      <input type="text" v-model="searchQuery" @input="getSearchResults" placeholder="Procure uma cidade ou estado"
        class="py-2 px-1 w-full bg-transparent border-b focus:border-weather-secondary focus:outline-none focus:shadow-[0px_1px_0_0_#004E71]">
      <ul class="absolute bg-weather-secondary text-white w-full shadow-md py-2 px-1 top-[66px]"
        v-if="mapBoxSearchResults">
        <p v-if="searchError">Desculpe, algo deu errado, por favor tente novamente.</p>
        <p v-if="!searchError && mapBoxSearchResults.length === 0">Nenhum resultado encontrado, tente um termo diferente.
        </p>
        <template v-else>
          <li v-for="searchResult in mapBoxSearchResults" :key="searchResult.id"
           @click="previewCity(searchResult)" class="py-2 cursor-pointer">
            {{ searchResult.place_name }}
          </li>
        </template>
      </ul>
    </div>
  </main>
</template>


<script src="./HomeView.js" />

