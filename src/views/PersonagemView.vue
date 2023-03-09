<template>
  <header>
    <img
      id="img_github"
      @click="voltar()"
      src="data:image/png;base64,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"
    />
  </header>
  <main>
    <h1>{{ store.uniquePersonagem?.name }}</h1>
    <div class="container">
      <div class="image"><img :src="store.uniquePersonagem?.image" alt=""></div>
      <div class="info">
        <div class="circle">
          <span  style="background-color: green;" v-if="store.uniquePersonagem?.status == 'Alive'"></span>
            <span  style="background-color: red;" v-else-if="store.uniquePersonagem?.status == 'Dead'"></span>
            <span  v-else-if="store.uniquePersonagem?.status == 'unknown'"></span>
            <h3>{{ store.uniquePersonagem?.status }}-{{ store.uniquePersonagem?.species }}</h3>
          </div>
          
          <h3>Visto pela primeira vez em:</h3>
          <h4>{{//@ts-ignore
          store.uniquePersonagem?.location?.name}}</h4>
          <h3>Genero:</h3>
          <h4>{{store.uniquePersonagem?.gender}}</h4>
          <h3>Episodios:</h3>
          <ul v-for="(Episodio, index) in store.infoEpisodioUniquePerson" :key="index">
            <li :href="string">{{ //@ts-ignore
              Episodio?.name }}</li>
            
          </ul>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import router from "@/router";
import { manager } from "@/stores/Maneger";
import { defineComponent, onMounted, ref } from "vue";
export default defineComponent({
  props: ["id"],
  data() {
    return {
      string: "",
    };
  },
  methods:{
    voltar(){
      router.push('/')
    }
  },
  setup() {
    const store = manager();
    return {
      store,
    };
  },
  mounted: async function () {
    if (this.id != null) {
      await this.store.buscarCharacterId(this.id);
    } else {
      router.push("/");
    }
  },
});
</script>

<style scoped>
main{
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
#img_github {
  background-color: aliceblue;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  position: absolute;
  height: 35px;
  top: 15px;
  left: 20px;
  cursor: pointer;
  z-index: 10;
}
.container {
  width: 70%;
  max-width: 450px;
  height: 80%;
  max-height: 700px;
  background-color: lightblue;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  border: 1px solid #1a191983;
  background-color: rgba(240, 248, 255, 0.353);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.55);
  border-radius: 12px;
  margin-bottom: 50px;
}
 h1 {
  font-family: Rollover;
  font-size: var(--fs-xl);
  color: var(--vt-c-Blue);
  margin: 70px auto 0 auto;
}

.image {
  width: 100%;
  height: 300px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}
.image img{
  width: 100%;
  height: 100%;
  object-fit: fill;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}
.info {
  width: 100%;
  max-height: 60%;
  overflow-y: auto;
  padding: 20px;
}

.info h3 {
  font-family: gabriela;
  font-size: var(--fs-base);

  margin: auto auto 0 10px;
}
.info h4 {
  font-family: Montserrat;
  font-size: var(--fs-sm);
  margin-left: 55px;
  margin: -5px auto auto 20px;
}
.circle {
  position: relative;
  padding-left: 15px;
  margin: auto auto auto 20px;
  font-size: var(--fs-sm);
  font-family: gabriela;
  font-weight: 500;
}
.circle span {
  position: absolute;
  left: 0;
  top: 13px;
  content: "";
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #0c0c0c;
}

ul {
  font-size: var(--fs-sm);
  font-family: Montserrat;
  font-style: italic;
/*   margin: 0 auto auto 20px; */
}
</style>