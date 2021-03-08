<template>

<header class="header"> 
    <a class="toggle" @click="toggleMenu" v-if="!hideToggle">
        <i class="fa fa-lg" :class="icon"></i>
        </a>
        <h1 class="title">

           <router-link to="/">    {{title}}   </router-link > 
        </h1>
        <UserDropdown v-if="!hideUserDropdown" />



</header>
    
</template>

<script>

import UserDropdown from './UserDropdown'

export default {
    name: 'Header',
    components: {UserDropdown},
    props:{
        title: String,
        hideToggle: Boolean,
        hideUserDropdown: Boolean
    },
    computed:{
        icon() {
            return this.$store.state.isMenuVisible ? "fa-angle-left" : "fa-angle-right"
        }    
    }, 
    methods: {
        toggleMenu() {
            this.$store.commit('toggleMenu')
          
        }
    }
}

</script>

<style>

    .header {
      grid-area:header;
      background: linear-gradient(to right, #f84c17,  #f73100);

      display: flex;
      justify-content: center;
      align-items: center;
    }


    .title {
        font-size: 1.2em;
        color:lavender;
        font-weight: 100;
        flex-grow: 1;
        text-align: center;
    }

    .title a {
        color: azure;
        text-decoration: none;
    }
     .title a:hover {
        color: rgb(255, 153, 0);
        text-decoration: none;
    }

    header.header > a.toggle {
        width: 60px;
        height: 100%;
        color:azure;
        justify-self: flex-start;
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    header.header > a.toggle:hover {
        background-color: rgba(0, 0, 0, 0.2)
    }


 

</style>

