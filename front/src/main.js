import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'

import './config/bootstrap'
import store from './config/store'

import router from '@/config/router'

Vue.config.productionTip = false

//TEMPORÁRIO

require('axios').defaults.headers.common['x-access-token'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYWVhMzBmZTU4MDZlNGVhODdjYTBkNyIsImVtYWlsIjoicmVzdGF1cmFudGU1QGdtYWlsLmNvbSIsIm5hbWUiOiJyZXN0YXVyYW50ZTUiLCJyb2xlcyI6WyJhZG1pbiJdLCJpYXQiOjE1NTQ5NjY4NzMsImV4cCI6MTU1NTEzOTY3M30.7-2LBYWQPei5shiFQb4adL-dtaPc-NsskgWM61sOqqU'

new Vue({
	store,
	router,
	render: h => h(App),
}).$mount('#app')
