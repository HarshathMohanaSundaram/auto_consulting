<template>
    <div class="admin">
        <div class="form">
            <vehiclelink />
        <div class="content">
            <router-view />
        </div>
        </div>   
    </div>
</template>

<script>
import vehiclelink from '@/components/vehiclelink.vue';

export default {
    name:'Vehicle',
    components:{
        vehiclelink
    },
    data(){
        return{
           
        }
    }
}
</script>

<style scoped>
.admin{
    display: flex;
    background-color:white;
    margin:8px;
    width:98%;
    height:98%;
    margin-bottom: 10px;
    border-radius: 21px;
    justify-content: center;
    align-items: center;
}
.form{
   display:grid;
    grid-template-columns : 1fr 5fr;
    background-color: teal;
    width:85vw;
    height:95vh;
    border-radius: 20px;
}
.content{
    background-color: white;
    border-radius: 20px;
    margin:6px 6px 6px 0px;
}
</style>