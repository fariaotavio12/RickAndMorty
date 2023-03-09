<template>
  <div class="container" >
    <div class="divImagem" >
      <img src="@/assets/rick.png" alt="">
    </div>
    <div class="apresentacao">
      <h1>Rick e Morty</h1>
      <p>
        O intuito dessa pagina e mostrar todos personagens da serie , podendo filtrar nome, status, gênero, espécie entre outros
        <br/> Desafio engagedu 
      </p>
      <button>Personagens</button>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  
}
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.divImagem{
  width: 100%;
  height: 40%;
  display: flex;

}
.divImagem img{
  border-radius: 12px;
  max-width: 250px;
  max-height: 250px;
  margin: 10px auto 10px auto;
}

.apresentacao{
  width: calc(100% - 10px);
  min-height: 60%;
  padding: 0 10px 0 10px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.apresentacao h1{
  font-family: Rollover;
  font-size: var(--fs-xl);
  color: var(--vt-c-Blue);
  margin: 0 auto 10px auto;
}

.apresentacao p{
  margin: 0 auto 10px auto;
  max-width: 450px;
  color: var(--vt-c-black-soft);
  text-align: center;
  text-indent: 10px;
  font-size: var(--fs-sm);
  font-weight: 600;
  font-style: italic;
  height: auto;
  margin-bottom: 10px;
  line-height: 30px;
}
button{
  width: 280px;
  height: 50px;
  margin: 10px auto 10px auto;
  background: #35D3D6;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  font-family: Gabriela;
  cursor:pointer;
  font-size: 20px;

  transition: transform 0.3s ease;
}

button:hover{
  transform: scale(1.05);
}

@media screen and (min-width: 900px) {
  .container {
    width: 100%;
    flex-direction: row-reverse;
  }
  .divImagem{
    width: 50%;
    height: 100%;
  }
  .divImagem img{

    max-height: 400px;
    margin: auto;
  }
  .apresentacao{
    min-height: 100%;
    width: calc(50% - 30px);
    justify-content: center;
  }

}
</style>