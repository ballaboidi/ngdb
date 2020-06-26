<template>
    <div class="header-img mx-auto my-5">
        <router-link :to="{path: '/'}">
            <app-image 
                name="Logo" 
                class="img-fluid"
                alt="Logo ngdb"
            />
        </router-link>
    </div>
</template>
<script>  
export default {  
  name: "Header",
};
</script>
<style lang="scss">
.header-img{
    width: 150px;
    overflow: hidden;
    img{
        width: 100%;
        height: 100%;
    }
}
</style>