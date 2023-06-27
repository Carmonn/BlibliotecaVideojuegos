// Vuetify
import 'vuetify/dist/vuetify.min.css';
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
// Add icons 'npm install @mdi/font -D'
import '@mdi/font/css/materialdesignicons.css'

const theme = { themes: {defaultTheme: 'dark'}}

const vuetify = createVuetify({ 
  components, directives, theme, icons: { iconfont: 'mdi' },
})


export default vuetify