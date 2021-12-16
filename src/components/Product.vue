<template>
<div class="products">
    <div class="product-info">
        <div class="product-image-wrap">
            <img v-bind:src="vehicle.src" class="image" />
        </div>
        <div class="product-detail">
            <h2>{{vehicle.bikename}}</h2>
            <h4>Model: {{vehicle.model}}</h4>  
            <h4>Price: {{vehicle.price}}</h4>
            <h4>Owner: {{vehicle.owner}}</h4>
            <h4>Kilometer: {{vehicle.kilometer}}</h4>      
        </div>
    </div>
</div>
</template>

<script>
export default {
    name:'Product',
    props : ['vehicle']
}
</script>

<style scoped>

.product-info{
    box-sizing: border-box;
    width:150px;
    height:350px;
    background-color: white;
    color:teal;
    flex: 1 1 33.33%;
    box-shadow: 0px 0px 16px rgb(92, 167, 167);
    border-radius: 21px;
}
.image{
    margin-top:10px;
    width:200px;
    height:100px;
}

</style>