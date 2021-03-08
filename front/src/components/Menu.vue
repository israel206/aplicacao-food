<template>

    <aside class="menu" v-show="isMenuVisible"> 

  <span class="restaurantes"> <h3> Restaurantes </h3> </span>

<table class="restaurants">

        <tbody >

          <tr  v-for="restaurant of restaurants" :key="restaurant.id">
           <h4> <td >{{restaurant.name}}</td> </h4>
           </tr>

        </tbody>
      
</table>


    </aside>


   
    
</template>

<script>
import Restaurant from '@/config/restaurants'

import { mapState } from 'vuex'

export default {

    	data(){
return{
	restaurants:[]
}
	},

    name: 'Menu',
    computed: mapState(['isMenuVisible']),
    	mounted(){
		Restaurant.listar().then(resposta => {
		
			this.restaurants = resposta.data
		})

	}

}
</script>

<style>
.menu {
    grid-area:menu;
    background: linear-gradient(to right, #ffffff, #e0e0e0);

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
}


.restaurantes {
        color: #000000;
        padding: 50px 60px 30px 70px;
        align-content: center;       
       
 }

    
  .restaurants {
      padding: 50px 60px 30px 70px;
    
    
}

table  {
 margin-left: 80px
 


}
    
</style>
