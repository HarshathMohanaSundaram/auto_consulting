<template>
    <div class="scooter">
    <h1>Scooters</h1>
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
import Product from './Product.vue'
export default {
  components: { Product },
  name:'scooter', 
  data(){
      return{
          vehicles:[
              {
                    bikename:'Honda Dio',
                    model:'2017',
                    price:'55000',
                    owner:'Three',
                    kilometer:'60000',
                    src: require('../assets/dio.png')
              },
              {
                    bikename:'Suzuki Access',
                    model:'2015',
                    price:'35000',
                    owner:'Two',
                    kilometer:'70000',
                    src: require('../assets/access.png')
                },
                {
                    bikename:'Honda Activa',
                    model:'2013',
                    price:'35000',
                    owner:'Two',
                    kilometer:'40000',
                    src: require('../assets/activa.png')
                },

          ]
      }
  }
}
</script>

<style scoped>
.scooter{
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