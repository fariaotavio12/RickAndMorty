<template>
  <nav>
    <a id="icon"><img src="@/assets/icon.png" alt=""></a>
    
    <ul>
      <li><a href="#personagem">Personagens</a></li>
    </ul>
    <a href="https://github.com/fariaotavio12" style="margin-left: auto; margin-right: 20px;"><img src="@/assets/icon _GitHub.png" alt="" ></a>
  </nav>
</template>

<script setup>
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
nav{
  width: 100%;
  height: 50px;
  display: flex;
  background-color: #000;
  align-items: center;
}
nav #icon{
  height: 100%;
  width: 50px;
  margin-left: 20px;
}
#icon img{
  width: 80%;
}
nav ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}
nav li {
  margin: 0 50px;
}
nav a {
  color: var(--vt-c-white);
  text-decoration: none;
  font-size: var(--fs-sm);
  font-style: italic;
  display: flex;
  align-items: center;
}

@media (hover: hover) and (pointer: fine) {
  nav a:hover,:focus {
    color: #FAFF00;
    transition: all 1s linear;
}

}

@media screen and (max-width: 600px) {
  nav{
    display: none;
  }

}


</style>