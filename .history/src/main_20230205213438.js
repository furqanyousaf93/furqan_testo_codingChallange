import { createApp } from 'vue'
import App from './App.vue'
import HelloWorld from './components/HelloWorld.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
library.add(faCartShopping)
createApp(App).component('font-awesome.icon',FontAwesomeIcon).mount('#app')
createApp(HelloWorld).mount('#HelloWorld')