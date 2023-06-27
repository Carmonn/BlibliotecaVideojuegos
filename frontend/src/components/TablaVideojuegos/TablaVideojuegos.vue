<script setup>
import AccionesTabla from './AccionesTabla.vue'
import {useStoreTabla} from '@/stores/storeTabla'

  const storeTabla = useStoreTabla() 
  storeTabla.ObtenerVideojuegos()
  
</script>

<template>
  <v-table class="table_contenedor">
    <thead>
      <tr>
        <th class="campo-cabecera">Title</th>
        <th class="campo-cabecera">Gender</th>
        <th class="campo-cabecera">Played?</th>
        <th class="campo-cabecera-actions">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(videojuego, index) in storeTabla.videojuegos" :key="videojuego.id">
        <td>{{ videojuego.title }}</td>
        <td>{{ videojuego.gender }}</td>
        <td>
          <span v-if="videojuego.played ">Yes</span>
          <span v-else>No</span>
        </td>
        <td><acciones-tabla :index="index"></acciones-tabla></td>
      </tr>
    </tbody>
  </v-table>
</template>

<style scoped>
.table_contenedor{
 background-color: transparent;
 border: 1px solid rgb(var(--v-theme-secondary));
 border-radius: 10px;
}
td,th{
  text-align: center !important; 
  color: white !important;
}

.table_contenedor tbody tr:first-child td  {
  border-top: solid 1px rgb(var(--v-theme-secondary));
}

.campo-cabecera {
    width: 20%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .campo-cabecera-actions {
    width: 40%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>