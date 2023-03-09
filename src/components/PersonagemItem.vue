<script setup lang="ts">
//@ts-ignore

import { defineProps } from 'vue';

const props = defineProps({
  status: {
    type: String,
    required: true,
  },
});

var styleCircle: string | null
/* if (props.status != undefined) {
  if (props.status == 'Alive') {

    styleCircle = 'background-color: green '

  }
  if (props.status == 'Dead') {
    styleCircle = 'background-color: red '
  }
} */
</script>

<template>
  <div>
    <div class="item">
      <div class="foto">
        <slot name="foto"></slot>
      </div>
      <div class="details">
        <h3
          style="
            font-size: var(--fs-base);
            font-family: 'Montserrat';
            font-style: italic;
          "
        >
          <slot name="nome"></slot>
        </h3>

        <div class="circle">
          <slot name="bolinha"></slot>
          <slot name="status"></slot>-<slot name="especie"></slot>
        </div>
        <h4 style="margin-bottom: 2px; ">Genero:</h4>
        <h4 style="font-weight: 600; margin-top: 0px">
          <slot name="genero"></slot>
        </h4>
        <h4
          style="
            margin-bottom: 2px;
            font-family: 'Montserrat';
            font-style: italic;
          "
        >
          Última localização conhecida:
        </h4>
        <h4 style="font-weight: 600; margin-top: 0px">
          <slot name="localizacao"></slot>
        </h4>
        <h4 style="margin-bottom: 2px; ">Visto pela primeira vez em:</h4>
        <h4 style="font-weight: 600; margin-top: 0px">
          <slot name="visto"></slot>
        </h4>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.item {
  width: 280px;
  height: auto;
  display: flex;
  flex-direction: column;
  margin: 20px;
  border: 1px solid #3f3c3c83;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  transition: transform 0.3s ease;
  cursor: pointer;
}

.item:hover {
  transform: scale(1.05);
}

.foto {
  position: relative;
  width: 100%;
  height: 50%;
  background-color: azure;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  overflow: hidden;
}

.details {
  padding: 10px;
  width: 100%;
  min-height: 50%;
  display: flex;
  flex-direction: column;
}

.circle {
  position: relative;
  padding-left: 15px;
  margin: auto 0 auto 0;
  font-size: var(--fs-sm);
  font-family: gabriela;
  font-weight: 500;
}
.cirle span {
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

h4 {
  margin: auto 0 auto 0;
}

@media screen and (min-width: 600px) {
  .item {
    width: 500px;
    height: 250px;
    flex-direction: row;
  }
  .foto {
    width: 40%;
    height: auto;
    border-top-right-radius: 0;
    border-bottom-left-radius: 10px;
  }
  .details {
    width: 60%;
    height: auto;
    flex-grow: 1;
    padding-left: 15px;
    min-height: 100%;
    justify-content: center;
  }
}

@media screen and (min-width: 900px) {
  .item {
    width: 550px;
    height: 300px;
    overflow: hidden;
  }

  .details {
    justify-content: start;
  }
}
</style>
