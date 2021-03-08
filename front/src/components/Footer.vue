<template>
    <footer class="footer"> 
        <span> Copyright <strong> Food </strong> -  2019 </span>
        
        </footer>
</template>

<script>
export default {
    name:"Footer"

}
</script>

<style>
.footer {
    grid-area: footer;
    background-color:rgb(39, 39, 39);
    color:rgb(255, 255, 255);

    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 10px;

}

</style>
