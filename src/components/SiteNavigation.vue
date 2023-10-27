<template>
    <header class="stick top-0 bg-weather-primary shadow-lg">
        <nav class="container flex flex-col sm:flex-row items-center gap-4 text-white py-6">
            <RouterLink :to="{ name: 'home' }">
                <div class="flex items-center gap-3">
                    <i class="fa-solid fa-sun text-2xl"></i>
                    <p class="text-2xl">Flex Weather</p>
                </div>
            </RouterLink>
            <div class="flex gap-3  flex-1 justify-end">
                <i class="fa-solid fa-circle-info text-xl hover:text-weather-secondary duration-150 cursor-pointer" @click="toggleModal"></i>
                <i class="fa-solid fa-plus text-xl hover:text-weather-secondary duration-150 cursor-pointer"></i>
            </div>
            <BaseModal :modalActive="modalActive" @close-modal="toggleModal">
                <div class="text-black">
                    <h1 class="text-2xl mb-1">Sobre:</h1>
                    <p class="mb-4">
                        Flex Weather permite que você acompanhe a situação atual e
                        clima futuro das cidades de sua escolha.
                    </p>
                    <h2 class="text-2xl">Como funciona:</h2>
                    <ol class="list-decimal list-inside mb-4">
                        <li>
                            Procure sua cidade digitando o nome no campo
                            Barra de pesquisa.
                        </li>
                        <li>
                            Selecione uma cidade nos resultados, isso levará
                            você para o clima atual para sua seleção.
                        </li>
                        <li>
                            Acompanhe a cidade clicando no ícone "+" no
                            canto superior direito. Isso salvará a cidade para visualização em um
                            mais tarde na página inicial.
                        </li>
                    </ol>

                    <h2 class="text-2xl">Removendo uma cidade</h2>
                    <p>
                        Se você não deseja mais rastrear uma cidade, basta selecionar
                        a cidade na página inicial. Na parte inferior do
                        página, haverá uma opção para excluir a cidade.
                    </p>
                </div>
            </BaseModal>
        </nav>
    </header>
</template>

<script setup>
import { RouterLink } from "vue-router";
import BaseModal from "./BaseModal.vue";
import { ref } from "vue";
const modalActive = ref(null);
const toggleModal = () => {
    modalActive.value = !modalActive.value;
}

</script>
