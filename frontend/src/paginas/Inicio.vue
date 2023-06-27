<script setup>
import {ref} from 'vue'
import BarraPrincipal from '../components/BarraPrincipal.vue'
import DialogAgregarVideojuegos from '../components/Dialogs/DialogAgregarVideojuegos.vue'
import TablaVideojuegos from '../components/TablaVideojuegos/TablaVideojuegos.vue'

  const opcionDialog = ref(false)
  function ActivarDialog(){ opcionDialog.value = true}
  function DesactivarDialog(){ opcionDialog.value = false}

</script>

<template>
  <barra-principal></barra-principal>

  <teleport to="body">
    <dialog-agregar-videojuegos 
    v-if="opcionDialog" 
    @desactivar-dialog="DesactivarDialog">
    </dialog-agregar-videojuegos>
  </teleport>

  <div class="ma-6">
    <div class="mb-3">
      <v-btn @click="ActivarDialog" class="rounded-lg" variant="outlined" color="secondary">
        <v-icon color="green">mdi-plus</v-icon>
        Add Game
      </v-btn>
    </div>
    <tabla-videojuegos></tabla-videojuegos>
  </div>
</template>

<style scoped>
</style>