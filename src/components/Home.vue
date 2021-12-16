<template>
    <div class="home">
        <div class="image">
            <img src="../assets/home.png" width=1249 height=300 alt="home"/>
        </div> 
        <div class="content">
            <h1> Sri Kumaran Auto Consulting</h1><br>
            <h3> " Your Search For the Trusted Used Bike is Over!" </h3><br>
            <p>     We brings to you the best collection of the used bikes at your doorstep taking care of all the details related to it.</p>
            <p> The craze of riding a bike or a scooty is on the higher side. It saves a lot of time to travel in two wheeler. With this idea, 
                We brings to you user-friendly top-graded second hand two wheeler at a much affordable price. You can sell your bike or buy used 
                bike without any hassle.</p>
        </div>
  </div>   
</template>

<script>
export default {
    name:'Home',
    
}
</script>

<style >
.home{
    background-color:rgb(92, 167, 167);
    margin:8px;
    margin:8px;
    width:98%;
    height:98%;
    margin-bottom: 10px;
    border-radius: 21px;
}
.image img{
    border-radius: 21px 21px 0px 0px ;
}
.content{
    color:white;
}
.content h1{
    font-size: 25px;
}
.content h3{
    font-size: 20px;
}
.content p{
    font-size:18px;
    margin:auto;
    box-sizing: border-box;
    opacity: 0.8;
}
</style>