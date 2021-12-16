<template>
    <div class="dashboard">
        <Sidebar/>
        <div class="content">
            <router-view/>
        </div>
    </div>
</template>
<script>
import Sidebar from "@/components/Sidebar.vue";
import { onBeforeMount } from 'vue';
import {useRouter, useRoute} from 'vue-router';
import firebase from 'firebase';

export default {
    name:'Dashboard',
    components:{
        Sidebar,
    },
    setup(){
        const router = useRouter();
        const route = useRoute();
        onBeforeMount(() => {
            firebase.auth().onAuthStateChanged((user) => {
                if(!user)
                {
                    router.replace('/login');
                }
                else if(route.path=='/login' || route.path=='/signup'){
                    router.replace('/');
                }
            });
        });
    }
}
</script>

<style scoped>
.dashboard{
    display:grid;
    grid-template-columns : 1fr 5fr;
    background-color: teal;
    height: 100vh;
    width:100vw;
}
.content{
    background-color: white;
    border-radius: 20px;
    margin:6px 6px 6px 0px;
}
</style>