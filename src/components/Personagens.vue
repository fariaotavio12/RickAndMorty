<template>
  <!-- FILTRO -->
  <div>
    <div class="SearchAndfiltro">
    <img src="@/assets/Filter.png" alt="Filtro" @click="filtro = !filtro" />
    <div class="input-group">
      <div class="image-container">
        <img src="@/assets/info.png" alt="Informações" id="info" class="icon" />
        <!-- Informações adicionais exibidas em um balão de dica quando o usuário passa o mouse sobre o ícone de informações -->
        <span class="tooltip">Resultado Instanteneo, Vinculado ao filtro, podendo filtrar nome,
          Status e Genero</span>
      </div>
      <!-- Entrada de texto para pesquisa de personagens, vinculada ao filtro -->
      <input type="text" class="form-control" placeholder="Pesquisar" v-model="busca.nome" />
      <!-- Ícone de pesquisa, vinculado à entrada de texto de pesquisa -->
      <img src="@/assets/search.png" alt="Pesquisar" class="icon" style="left: 89%" />
    </div>
  </div>

  <!-- CAIXA DE FILTRO -->
  <!-- Caixa de filtro com lista suspensa para selecionar o status e gênero do personagem -->
  <Transition name="slide-fade">
    <div class="filtro" v-if="filtro">
      <img src="@/assets/fechar.png" id="fechar" alt="Fechar" @click="filtro = !filtro" />
      <div>
        <label for="status">Status:</label>
        <select name="status" id="" v-model="busca.status">
          <option value="Todos">Todos</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">unknown</option>
        </select>
      </div>
      <div>
        <label for="Gender">Genero:</label>
        <select name="Gender" id="" v-model="busca.genero">
          <option value="Todos">Todos</option>
          <option value="female">Female</option>
          <option value="genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </div>
    </div>
  </Transition>

  <!-- PERSONAGENS -->
  <!-- Loop que exibe os personagens -->
  <div class="itemPersonagem">
    <div v-for="(personagem, index) in store.personagens" :key="index">

      <!-- Componente personalizado que exibe informações de cada personagem -->
      <PersonagemItem @click="AbrirPersonagem(personagem.id)" :status="personagem.status">
        <!-- Slot para exibir a imagem do personagem -->
        <template #foto>
          <img :src="personagem.image" alt="" />
        </template>
        <!-- Slot para exibir o nome do personagem -->
        <template #nome>
          {{ personagem.name }}
        </template>
        <!-- Slot para exibir um círculo colorido que indica o status do personagem -->
        <template #bolinha>
          <span id="bolinha" style="background-color: green;" v-if="personagem.status == 'Alive'"></span>
          <span id="bolinha" style="background-color: red;" v-else-if="personagem.status == 'Dead'"></span>
          <span id="bolinha" v-else-if="personagem.status == 'unknown'"></span>
        </template>
        <template #status>
          <!-- exibição do status do personagem -->
          {{ personagem.status }}
        </template>
        <template #especie>
          <!-- exibição da espécie do personagem -->
          {{ personagem.species }}
        </template>
        <template #genero>
          <!-- exibição do gênero do personagem -->
          {{ personagem.gender }}
        </template>
        <template #localizacao>
          <!-- exibição do nome da localização do personagem -->
          {{
            //@ts-ignore
            personagem.location?.name
          }}
        </template>
        <template #visto>
          <!-- exibição do nome do episódio em que o personagem apareceu -->
          {{
            //@ts-ignore
            personagem.visto?.name
          }}
        </template>
      </PersonagemItem>
    </div>
  </div>

  <div class="paginacao">
    <div id="separadorLetra">
      <h4 id="result">
        Result:<br />
        {{
          //@ts-ignore
          store.info?.count
        }}
      </h4>
      <h4 id="pages">
        Pages:<br />
        {{
          //@ts-ignore
          store.info?.pages
        }}
      </h4>
    </div>
    <div id="separadorBottons">

      <img id="meuBotao1" @click="store.paginacao('prev')"
        src="data:image/png;base64,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">
      <div class="numeracaoPagina">
        {{ store.page }}
      </div>
      <img id="meuBotao" @click="store.paginacao('next')"
        src="data:image/png;base64,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">

    </div>
  </div>
  </div>
  <!-- Componente de filtro, exibido ou ocultado quando o usuário clica no ícone de filtro -->
  
</template>

<script lang="ts">
//@ts-ignore
import PersonagemItem from "./PersonagemItem.vue";
import { defineComponent, onMounted, ref } from "vue";
import { manager } from "@/stores/Maneger";
import router from "@/router";
export default defineComponent({
  components: { PersonagemItem },
  data() {
    return {
      filtro: false,
      busca: {
        status: "Todos",
        genero: "Todos",
        nome: "",
      },
    };
  },
  methods: {
    AbrirPersonagem(variavel: any) {
      router.push({ name: "personagem", params: { id: variavel } });
    },
    filtragem() {
      var consulta = "https://rickandmortyapi.com/api/character/?";

      if (this.busca.status != "Todos") {
        consulta += "&status=" + this.busca.status;
      }
      if (this.busca.genero != "Todos") {
        consulta += "&gender=" + this.busca.genero;
      }
      if (this.busca.nome != "") {
        consulta += "&name=" + this.busca.nome;
      }
      this.store.novaBusca(consulta);
    },
  },
  setup() {
    const store = manager();
    return {
      store,
    };
  },
  mounted: async function () {
    await this.store.fetchTodos();
  },
  watch: {
    "busca.status"() {
      this.filtragem.bind(this)();
    },
    "busca.genero"() {
      this.filtragem.bind(this)();
    },
    "busca.nome"() {
      this.filtragem.bind(this)();
    },
  },
});
</script>

<style scoped>
.container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.container h1 {
  font-family: Rollover;
  font-size: var(--fs-xl);
  color: var(--vt-c-Blue);
  margin: 20px auto 0 auto;
}

.itemPersonagem {
  width: 100%;
  height: auto;
  height: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

#bolinha {
  position: absolute;
  left: 0;
  top: 10px;
  content: "";
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #000;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* CSS DO FILTRO E INPUT */

.SearchAndfiltro {
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.SearchAndfiltro img {
  width: 20px;
  margin: auto 20px auto 0;
  cursor: pointer;
}

.input-group {
  position: relative;
  width: 230px;
  display: flex;
}

.icon {
  position: absolute;
  width: 10px;
  height: 20px;
  top: 8px;
  left: 5px;
  z-index: 5;
}

.SearchAndfiltro input {
  position: relative;
  width: 100%;
  height: 35px;
  padding: 0 40px 0 40px;
  background: #ffffff;
  border: 1px solid #bcbaba;
  border-radius: 12px;
  font-size: var(--fs-sm);
  font-style: italic;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.filtro {
  position: absolute;
  width: 300px;
  height: 250px;
  top: 365px;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--vt-c-Blue-05);
  border: 1px solid #818080;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.55);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  z-index: 9;
}

#fechar {
  position: absolute;
  width: 20px;
  height: 20px;
  top: 10px;
  right: 10px;
  cursor: pointer;
}

.filtro>div {
  display: flex;
  flex-direction: column;
  text-align: center;
}

.filtro label {
  font-size: var(--fs-sm);
  font-family: gabriela, system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
    sans-serif;
}

.filtro select {
  width: 150px;
  height: 30px;
  font-size: var(--fs-xs);
  margin: 0px auto 5px auto;
  border: 1px solid #bcbaba;
  border-radius: 7px;
}

.image-container {
  position: relative;
  display: inline-block;
  background-color: #333;
}

.tooltip {
  visibility: hidden;
  position: absolute;
  width: 230px;
  top: -70px;

  padding: 5px 10px;
  background-color: #333;
  color: #fff;
  border-radius: 5px;
  font-size: 10px;
}

.image-container:hover .tooltip,
.image-container:focus .tooltip {
  visibility: visible;
}

input,
select:focus {
  outline: 1px solid #585858;
}

/* FECHAMENTO DO CSS DO FILTRO E INPUT */

.paginacao {
  position: relative;
  width: 90%;
  height: auto;
  display: flex;
  margin: 10px auto 10px auto;
  justify-content: center;
  /*   background-color: #942525;
 */
}

#separadorLetra {
  position: absolute;
  display: flex;
  width: 70%;
  justify-content: space-between;
  text-align: center;
  /*   z-index: 10; */
}

#separadorBottons {
  display: flex;
  width: 100%;
  justify-content: center;
}

.paginacao h4 {
  line-height: 40px;
  font-size: var(--fs-base);
  font-family: "Gabriela";
}

.numeracaoPagina {
  width: 150px;
  height: 37px;
  text-align: center;
  background: #fefefe;
  border-radius: 12px;
  margin: 0 10px 0 10px;
  font-family: serif;
  font-size: var(--fs-base);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
}

#separadorBottons img {
  width: 50px;
  height: 35px;
  font-size: var(--fs-sm);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-out;
  margin: 0 10px 0 10px;
  background: #35d3d6;
  border-radius: 12px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
}

#separadorBottons img:hover {
  transform: scale(1.1);
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

@media screen and (max-width: 900px) {
  .paginacao h4 {
    line-height: 27px;
  }

  #separadorLetra {
    width: 80%;
    justify-self: center;
  }

  #separadorBottons {
    width: 100%;
    margin-top: 100px;
  }
}

@media screen and (min-width: 900px) {
  br {
    display: none;
  }

  #separadorBottons {
    margin-top: 0px;
  }
}
</style>