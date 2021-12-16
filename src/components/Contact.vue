<template>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div class="contact">
        <center>Contact Us</center>
        <div class="media"> 
            <p> 
                <i class = "fa fa-envelope" style="color:red;"></i> kumaranautoconsulting@gmail.com
            </p>
        </div>
        <div class="media"> 
            <p> 
                <i class = "fa fa-phone" style="color:blue;"></i> +91 9956745472
            </p>
        </div>
        <div class="media">
            <p> 
                <i class = "fa fa-whatsapp" style="color:green;"></i> +91 9392746421
            </p>
        </div>
        <div class="media">
            <p> 
                <i class = "fa fa-facebook" style="color:blue;"></i> kumaranautoconsulting
            </p>
        </div>
        <div class="media">
            <p> 
                <i class = "fa fa-instagram" style="color:red;"></i> @kumaran_auto_consulting
            </p>
        </div>
        <div class="media">
            <p> 
                <i class = "fa fa-twitter" style="color:blue;"></i> kumaran_auto_consulting
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name:'Contact',
}
</script>

<style scoped>
.contact{
    display: flex;
    background-color:rgb(92, 167, 167);;
    margin:8px;
    width:98%;
    height:98%;
    margin-bottom: 10px;
    border-radius: 21px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color:white;
    font-size:20px;
}
.media{
    color:teal;
    font-weight: bolder;
    width:400px;
    height:60px;
    margin-top:10px;
    border-radius: 10px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>