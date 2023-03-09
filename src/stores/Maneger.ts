import { defineStore } from 'pinia';
import { api } from './api';
import axios from 'axios';

interface Origin {
  name: string;
  url: string;
}

interface Location {
  name: string;
  url: string;
}

interface Info {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

interface Episode {
  url: string;
}

interface Visto {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: never;
}

interface Personagem {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin[];
  location: Location[];
  image: string;
  episode: Episode[];
  url: string;
  created: string;
  visto: Visto[];
}

interface State {
  personagens: Personagem[];
  info: Info;
  page: number;
  results: Personagem[];
  uniquePersonagem: Personagem | null;
  infoEpisodioUniquePerson : [] | null;
}

export const manager = defineStore({
  id: 'personagem',
  state: (): State => ({
    personagens: [],
    info: { count: 0, pages: 0, next: null, prev: null },
    page: 1,
    results: [],
    uniquePersonagem: null,
    infoEpisodioUniquePerson: []
  }),
  actions: {
    async fetchTodos() {
      try {
        const response = await api.get<State>('character');
        this.personagens = response.data.results;
        this.info = response.data.info;
        this.results = response.data.results;
        await this.buscaLocal();
      } catch (error) {
        console.error(error);
      }
    },
    async buscaLocal() {
      for (const propriedade in this.personagens) {
        const episode = this.personagens[propriedade];
        if (!episode.episode[0]) {
          // episode sem episódio, pular para o próximo
          continue;
        } else {
          try {
            const response = await axios.get<Visto[]>(episode.episode[0].toString());
            this.personagens[propriedade].visto = response.data;
          } catch (error) {
            console.error(error);
          }
        }
      }
    },
    async paginacao(variavel: 'next' | 'prev') {
      if (variavel === 'next') {
        if (this.info.next !== null) {
          var pageNext = this.info.next.split('?page=')
          var intPage = parseInt(pageNext[1])
          this.page = intPage
          await this.novaBusca(this.info.next);
        }
      } else if (variavel === 'prev') {
        if (this.info.prev !== null) {
          var pagePrev = this.info.prev.split('?page=')
          var intPage = parseInt(pagePrev[1])
          this.page = intPage
          await this.novaBusca(this.info.prev);
        }
      }
    },
    async buscarCharacterId(variavel: number) {
      this.infoEpisodioUniquePerson = []
      try {
        const response = await api.get(`character/${variavel}`);
        this.uniquePersonagem = response.data;
    
        for(const propriedade in this.uniquePersonagem?.episode){
          //@ts-ignore
          await this.buscaInfoEpisodio(this.uniquePersonagem.episode[propriedade].toString())
        }
        
      } catch (error) {
        console.log(error);
      }
    },
    async buscaInfoEpisodio(variavel:string){
      try {
        const response = await axios.get(variavel);
        
        const data = response.data;
        //@ts-ignore
        this.infoEpisodioUniquePerson?.push(data)
        
      } catch (error) {
        console.log(error);
      }
    },
    async novaBusca(variavel: string) {
      try {
        const response = await api.get<State>(variavel);
        this.personagens = response.data.results;
        this.info = response.data.info;
        this.results = response.data.results;
        await this.buscaLocal();
      } catch (error) {
        console.log(error);
      }
    },
  },
});