import { ref } from 'vue';
import axios from 'axios';


export default {
    setup() {
        const searchQuery = ref("");
        const queryTimeout = ref(null);
        const mapBoxAPIKey = "pk.eyJ1IjoicmVkcm9kcmlnbyIsImEiOiJjbGd1eDh4am8wazUyM2VwZGczY256M3ZiIn0.qYQD68cqHPCgRyMYRICHCg";
        const mapBoxSearchResults = ref(null);
        const searchError = ref(null);
        function getSearchResults() {
            clearTimeout(queryTimeout.value);
            queryTimeout.value = setTimeout(async () => {
                if (searchQuery.value !== "") {
                    try {
                        const result = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${searchQuery.value}.json?access_token=${mapBoxAPIKey}&types=place`);
                        mapBoxSearchResults.value = result.data.features;
                    } catch (error) {
                        searchError.value = true;
                    }
                    console.log(mapBoxSearchResults.value);
                    return;
                }
                mapBoxSearchResults.value = null;
            }, 300);
        }
        return {
            searchQuery,
            queryTimeout,
            mapBoxAPIKey,
            mapBoxSearchResults,
            searchError,
            getSearchResults,
        }
    }
}