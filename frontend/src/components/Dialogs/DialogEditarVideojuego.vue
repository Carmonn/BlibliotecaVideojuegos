<script setup>
import {ref,onMounted} from 'vue'
import {useStoreTabla} from '@/stores/storeTabla'

  const props = defineProps(['index'])
  const emit = defineEmits(['DesactivarDialog'])

  const refDialog = ref(null)
  onMounted(()=>{refDialog.value.showModal()})

  const storeTabla = useStoreTabla()
  const videojuego = storeTabla.videojuegos[props.index]
  const nombreVideojuego = ref(videojuego.title)
  const genero = ref(videojuego.gender)
  const jugado = ref(videojuego.played)

  const tiposGenero = ['Shooter','Adventure', 'Races']

  function Editar() {
    storeTabla.EditarVideojuego(props.index,{
      'title': nombreVideojuego.value, 
      'gender': genero.value, 
      'played': jugado.value
    })
    emit('DesactivarDialog')
  }
  function Cancelar(){emit('DesactivarDialog')}


</script>

<template>
  <dialog ref="refDialog">
    <h2>Editar videojuego</h2>
    
    <form>
      <div class="ma-1">
        <input type="text" v-model="nombreVideojuego" placeholder="Nombre de videojuego">
      </div>
      <div class="ma-1">
        <select name="select" v-model="genero">
          <option selected disabled>Genero</option>
          <option v-for="tipoGenero in tiposGenero" :value="tipoGenero">{{ tipoGenero }}</option>
        </select>
      </div>
      <div class="ma-1">
        <v-btn-toggle class="grupoBotones" v-model="jugado">
          <v-btn :value="false">No</v-btn>
          <v-btn :value="true">Si</v-btn>
        </v-btn-toggle>
      </div>
    </form>

    <div class="d-flex justify-center">
      <v-btn class="w-50 mt-1" color="error" @click="Cancelar">Cancelar</v-btn>
      <v-btn class="w-50 mt-1" color="success" @click="Editar">Editar</v-btn>
    </div>
  </dialog>
</template>

<style scoped>
dialog::backdrop{
  background-color: rgba(0,0,0,.55);
}

dialog {
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30%;
  border: 1px solid black;
  border-radius: 20px;
  padding: 10px
}

h2{ text-transform: uppercase; text-align: center;}
form div{ border: 1px solid black; }
input{ text-align: center; width: 100%;}
select{ text-align: center; width: 100%;}

.grupoBotones{width: 100%;}
.grupoBotones button{width: 50%;}
</style>