<template>

<div id="app" :class="{'hide-menu': !isMenuVisible}">

	 <Header  title="Food Delivery" 
	:hideToggle="false"
	:hideUserDropdown="false"/>
	<Menu />
	<Content />
	<Footer />

	
	
 </div>
</template>

<script>

import {mapState} from 'vuex'
import Restaurant from '@/config/restaurants'

import Header from '@/components/Header'
import Menu from '@/components/Menu'
import Content from '@/components/Content'
import Footer from '@/components/Footer'

export default {


	name: "App",
	components: {Header, Menu, Content, Footer},
	computed: mapState(['isMenuVisible'])



}
</script>

<style>
  
  * {
	  font-family: "Roboto", sans-serif;
  }

  body {
	  margin:0%;
  }

  #app {
	
	  -moz-osx-font-smoothing: grayscale;

	  height: 100vh;
	  display: grid;

	  grid-template-rows: 90px 1fr 40px;
	  grid-template-columns: 300px 1fr;
	  grid-template-areas:
	  "header header"
	  "menu content"
	  "menu footer"
  }


#app.hide-menu {
	 grid-template-areas:
	  "header header"
	  "content content"
	  "footer footer"
}


</style>

