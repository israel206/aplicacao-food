<template>

<div class="page-title">
    <h1>  {{main}}   </h1>
    <h2>   {{sub}}   </h2>


 </div>
    
</template>

<script>
export default {
    name: 'PageTitle',
    props: [ 'main', 'sub' ]

}
</script>

<style>

.page-title h1 {
    margin: 0px,
}

.page-title h2 {
    color: antiquewhite;
    margin-top: 5px;
    font-size: 1.3rem;
}

</style>
