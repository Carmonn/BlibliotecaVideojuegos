import { defineStore } from 'pinia'

export const useStoreTabla = defineStore('storeTabla',{
  state: () => ({
    videojuegos: []
  }),
  actions:{
    async AgregarVideojuego(videojuego){
      try {
        const response = await fetch('http://localhost:5000/setVideojuego', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(videojuego)
        })
        if(!response.ok){throw new Error('Error al agregar un videojuego')}
        this.videojuegos.push(videojuego)
      }catch(e) {console.error(e.message);}
    },
    async EliminarVideojuego(index){ 
      try {
        const response = await fetch(`http://localhost:5000/deleteVideojuego/${index}`, {
          method: 'DELETE',
        });
        if (!response.ok) {throw new Error('Error al eliminar un videojuego');}
        this.videojuegos.splice(index,1) 
      }catch(e){console.error(e.message)}
    },
    async EditarVideojuego(index, videojuego){ 
      console.log(index, videojuego);
      const data = { index , videojuego}
      console.log(data);
      try {
        const response = await fetch('http://localhost:5000/updateVideojuego',{
          method: 'PUT',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(data)
        })
        if(!response.ok){throw new Error('Error al actualizar un videojuego')}
        this.videojuegos[index] = videojuego 
      }catch(e){console.error(e.message)}
    },

    async ObtenerVideojuegos(){
      try {
        const response = await fetch('http://localhost:5000/getAllVideojuegos')
        if(!response.ok){throw new Error('Error al obtener los videojuegos')}
        const videojuegos = await response.json()
        this.videojuegos = [...videojuegos]
      } catch (e) {console.error(e.message);}
    }
  },
})
