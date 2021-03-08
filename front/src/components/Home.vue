<template>

<!-- <div class="home">
    <PageTitle  main="Home"
    sub="Food Delivery" />
    -->

   <div >
       
    <router-link to="/">   <strong>  <a href=""> Inicio</a> </strong> </router-link> 
    
    <router-link to="/restaurantes"> 
    <strong>  <a href="">Restaurantes</a> </strong> 
    </router-link> 

    <strong>     <a href="">Produtos</a> </strong>
        
   <img class="materialboxed" src="@/imagem/ifood.png"> 
   <!-- <img class="materialboxed" data-caption="A picture of a way with a group of trees in a park" width="250" src="https://lorempixel.com/800/400/nature/4"> -->

   
</div>



      
 


</template>



<script>

import PageTitle from '@/components/PageTitle'

export default {

    name: 'Home',
    components: { PageTitle }

}
</script>

<style>
h1{
    font-size: 24px;
    display: inline;
    margin-right: 24px;
}


img {
    margin: 0%;
    width: 100%
}
a{
    margin-right: 20px;
    margin-left: 20px;
    color: rgb(247, 49, 49);
    position: 90px;
     color: black;
     

   

}
 a:hover{
    margin-right: 20px;
   margin-left: 20px;
     text-decoration: none;
     color: black;
  
}

strong {
    color: rgb(252, 227, 0);
}

</style>
