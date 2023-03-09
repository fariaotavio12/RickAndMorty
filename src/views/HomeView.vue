<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
//@ts-ignore
import ApresentacaoVue from "@/components/Apresentacao.vue";
//@ts-ignore
import Personagens from "@/components/Personagens.vue";
export default defineComponent({
  components: { ApresentacaoVue, Personagens },
})
</script>

<template>
  
    <header>
      <a href="https://github.com/fariaotavio12" target="_blank">
        <img src="@/assets/github.png" alt="Imagem contendo logo do github">
      </a>
    </header>
  
  <main>
    <div>
      <ApresentacaoVue />
      <personagens />
    </div>
  </main>
  <footer>

</footer>
</template>

<style scoped>
header{
  position: absolute;
  width: 100%;
  display: flex;
}
header a{
  width: auto;
  z-index: 10;
  margin: 10px 20px 0 auto;
  cursor: pointer;
}
img{
  width: 24px;
}
footer{
  width: 100%;
  height: 70px;
}
</style>

