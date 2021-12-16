<template>
    <div class="logout">
        <h1 v-if="name!=''">
            Hello {{name}}
        </h1>
        <h1 v-else>
            Login First!! 
        </h1>
        <br>
        <button @click="Logout" class="btn">Logout</button>
    </div>
</template>

<script>
import {ref, onBeforeMount} from 'vue';
import firebase from 'firebase';
export default {
name:"logout",
setup(){
    const name=ref("");
    
    onBeforeMount(() =>{
        const user = firebase.auth().currentUser;
        if(user){
            name.value = user.email.split('@')[0];
        }
    });

    const Logout = () =>{
        firebase
            .auth()
            .signOut()
            .then(()=>console.log("Signned Out"))
            .catch(err => alert(err.code))
    }

    return{
        name,
        Logout
    }
}
}
</script>

<style scoped>
.btn{
    width: 265px;
    height: 35px;
    background: teal;
    border: 1px  solid teal;
    color: #fff;
    cursor: pointer;
    border-radius: 21px;
}

.logout h1{
    align-items: center;
    justify-content: center;
    color:teal;
    margin-top: 100px;
}
</style>