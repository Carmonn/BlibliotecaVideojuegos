<script setup>
import DialogEditarVideojuego from '../Dialogs/DialogEditarVideojuego.vue';
import {useStoreTabla} from '@/stores/storeTabla'
import {ref} from 'vue'

    const props = defineProps(['index'])
    function Editar(){ ActivarDialog() }
    function Eliminar(){ useStoreTabla().EliminarVideojuego(props.index)}

    const opcionDialog = ref(false)
    function ActivarDialog(){ opcionDialog.value = true}
    function DesactivarDialog(){ opcionDialog.value = false}
</script>

<template>
  <dialog-editar-videojuego 
    v-if="opcionDialog"
    @desactivar-dialog="DesactivarDialog"
    :index="index"
  ></dialog-editar-videojuego>
  <div class="d-flex justify-center">
    <v-btn class="tamano_btn" color="info" variant="outlined" @click="Editar">
      Editar 
      <v-icon class="ml-2">mdi-pencil</v-icon>
    </v-btn>

    <div class="separador_btn"></div>

    <v-btn class="tamano_btn" color="error" variant="outlined" @click="Eliminar">
      Eliminar
      <v-icon class="ml-2">mdi-delete-outline</v-icon>
    </v-btn>
  </div>
</template>

<style scoped>
.separador_btn{ width: 1%;}
.tamano_btn{width: 120px;}

</style>