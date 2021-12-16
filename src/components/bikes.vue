<template>
<div class="bike">
    <h1>Bikes</h1>
    <div class="products">
        <Product
        v-for="vehicle in vehicles"
        :key="vehicle.bikename"
        :vehicle="vehicle"
     />
    </div>
</div>
    
</template>

<script>
import Product from "@/components/Product.vue";
export default {
    name:'bike', 
    components:{Product},
    data(){
        return{
            vehicles:[
                {
                    bikename:'Bajaj Platina',
                    model:'2016',
                    price:'55000',
                    owner:'Single',
                    kilometer:'40000',
                    src: require('../assets/platina.png')
                },
                {
                    bikename:'Honda Unicorn',
                    model:'2017',
                    price:'60000',
                    owner:'Single',
                    kilometer:'30000',
                    src: require('../assets/unicorn.png')
                },
                {
                    bikename:'Bajaj Pulsar',
                    model:'2015',
                    price:'45000',
                    owner:'Two',
                    kilometer:'55000',
                    src: require('../assets/pulsar.png')
                },

            ]
        }
    }
    
}
</script>

<style scoped>
.bike{
    margin-top:150px;
    color:teal;
}
.products{  
    margin:8px;
    margin:8px;
    width:98%;
    height:98%;
    margin-bottom: 10px;
    border-radius: 21px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
</style>