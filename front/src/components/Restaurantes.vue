<template>

<div>    
   <div >       
    <router-link to="/">   <strong>  <a href=""> Inicio</a> </strong> </router-link> 
     <strong>    <a href="">Restaurantes</a> </strong>
    <strong>     <a href="">Produtos</a> </strong>
   </div> 
   <hr>
 

<div class="admin-pages">
    <PageTitle main="Restaurantes cadastrados"     sub="Food Delivery" />  

</div>

    


 <form @submit.prevent="salvar">

      <label>Nome</label>
          <input type="text" placeholder="Nome" v-model="restaurante.name">
          <label>Email</label>
          <input type="email" placeholder="Digite seu melhor email" v-model="restaurante.email">
          <label>Senha</label>
          <input type="password" placeholder="Minimo de 6 caracteres" v-model="restaurante.password">

          <button class="waves-effect waves-light btn-small">Salvar<i class="material-icons left">save</i></button>

      </form>
      <hr> 

       <table>

        <thead>

          <tr >
            <th>NOME</th>
            <th>EMAIL</th>         
          
          </tr>

        </thead>

        <tbody>

          <tr  v-for="restaurante of restaurantes" :key="restaurante.id">

      
            <td>{{ restaurante.name }}</td>
            <td>{{ restaurante.email }}</td>
          
            <td>
              <button class="btn-floating btn-large cyan pulse"><i class="material-icons">edit</i></button>
              <button class="lixo"><i class="material-icons">delete_sweep</i></button>
            </td>

          </tr>

        </tbody>
      
      </table>
      <hr>


 </div>



</template>

<script>
import Restaurante from '@/services/restaurantes'

import PageTitle from '@/components/PageTitle'
export default {

    name: 'Restaurante',
    components: {PageTitle, Restaurante},

  data(){
    return {
      restaurante: {
        name:'',
        email:'',
        password:''
      },

      restaurantes: []
    }
},


  mounted(){
    this.listar()
   
  },


  methods:{

    listar(){
       Restaurante.listar().then(resposta => {
      this.restaurantes = resposta.data
    })

    },

 salvar(){

      Restaurante.salvar(this.restaurante).then(resposta =>{
        this.restaurante = {}
        alert('restaurante salvo com sucesso!')
        this.listar()
      })

         }     
}
 }
</script>

<style>

form {
    color: rgb(61, 61, 61);
    margin-left: 130px;
}

.admin-pages{
        margin-left: 350px;
}


.lixo{
        margin-left: 30px;
}



</style>
