<template>

<div>    
   <div >       
    <router-link to="/">   <strong>  <a href=""> Inicio</a> </strong> </router-link> 
     <strong>    <a href="">Restaurantes</a> </strong>
    <strong>     <a href="">Produtos</a> </strong>
   </div> 
   <hr>
 

<div class="admin-pages">
    <PageTitle main="Pratos cadastrados"    />  

</div>

    


 <form @submit.prevent="salvar">

      <label>Titulo</label>
          <input type="text" placeholder="Digite um título para o produto" v-model="produto.title">
          <label>slug</label>
          <input type="text" placeholder="Digite um identificador único" v-model="produto.slug">
          <label>descrição</label>
          <input type="text" placeholder="Minimo de 6 caracteres" v-model="produto.description">
          <label>price</label>
          <input type="number" placeholder="Valor do prato" v-model="produto.price">

          <button class="waves-effect waves-light btn-small">Salvar<i class="material-icons left">save</i></button>

      </form>
      <hr> 

       <table>

        <thead>

          <tr >
            <th>NOME DO PRATO</th>
            <th>DESCRIÇÃO</th>         
          
          </tr>

        </thead>

        <tbody>

          <tr  v-for="produto of produtos" :key="produto.id">

      
            <td>{{ produto.title}}</td>
            <td>{{ produto.description }}</td>
          
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
import Produto from '@/services/produtos'

import PageTitle from '@/components/PageTitle'
export default {

    name: 'Produto',
    components: {PageTitle, Produto},

  data(){
    return {
      produto: {
        title:'',
        slug:'',
        description:'',
        price:''

      },

      produtos: []
    }
},


  mounted(){
    this.listar()
   
  },


  methods:{

    listar(){
       Produto.listar().then(resposta => {
      this.produtos = resposta.data
    })

    },

 salvar(){

      Produto.salvar(this.produto).then(resposta =>{
        this.produto = {}
        alert('produto salvo com sucesso!')
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
