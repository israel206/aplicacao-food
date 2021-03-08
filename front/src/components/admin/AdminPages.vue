<template>

<div>     
 

<div class="admin-pages">
    <PageTitle main="Painel Administrativo"     sub="Food Delivery" />  

</div>


 <form @submit.prevent="salvar">

      <label>Nome</label>
          <input type="text" placeholder="Nome" v-model="usuario.name">
          <label>Email</label>
          <input type="email" placeholder="Digite seu melhor email" v-model="usuario.email">
          <label>Senha</label>
          <input type="password" placeholder="Minimo de 6 caracteres" v-model="usuario.password">

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

          <tr  v-for="usuario of usuarios" :key="usuario.id">

      
            <td>{{ usuario.name }}</td>
            <td>{{ usuario.email }}</td>
          
            <td>
              <button class="waves-effect btn-small blue darken-1"><i class="material-icons">create</i></button>
              <button class="lixo"><i class="material-icons">delete_sweep</i></button>
            </td>

          </tr>

        </tbody>
      
      </table>
      <hr>


 </div>



</template>

<script>
import Usuario from '@/services/usuarios'

import PageTitle from '@/components/PageTitle'
export default {

    name: 'AdminPages',
    components: {PageTitle,},

  data(){
    return {
      usuario: {
        name:'',
        email:'',
        password:''
      },

      usuarios: []
    }
},


  mounted(){
    this.listar()
   
  },


  methods:{

    listar(){
       Usuario.listar().then(resposta => {
      this.usuarios = resposta.data
    })

    },

 salvar(){

      Usuario.salvar(this.usuario).then(resposta =>{
        this.usuario = {}
        alert('Usuario salvo com sucesso!')
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
        margin-left: 150px;
}


.lixo{
        margin-left: 30px;
}



</style>
