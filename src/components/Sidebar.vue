<template>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div class="sidebar">
        <div class="title">
            Kumaran Auto <br>Consulting
        </div>
        <div class="menu-items">
             <router-link style="text-decoration: none;" to="/" exact-active-class="active"  tag="button" class="side-btn">
                <div class="link-container">
                    <i class="fa fa-home"></i> Home
                </div>
            </router-link>
            <router-link style="text-decoration: none;" to="/vehicle" exact-active-class="active"  tag="button" class="side-btn">
                <div class="link-container">
                    <i class="fa fa-motorcycle"></i> Vehicle
                </div>
            </router-link>
            <router-link style="text-decoration: none;" to="/contact" exact-active-class="active"  tag="button" class="side-btn">
                <div class="link-container">
                    Contact
                </div>
            </router-link>
            <router-link style="text-decoration: none;" to="/admin" exact-active-class="active"  tag="button" class="side-btn">
                <div class="link-container">
                    Login/Signup
                </div>
            </router-link>

        </div>
    </div>
</template>

<script>
export default {
    name:'Sidebar',
}
</script>

<style  scoped>
.title{
    color: white;
    font-size:24px;
    margin-top:10px;
}
.menu-items{
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    margin-left:6px;
}
.menu-items > *{
    margin-top: 60px;
}
.side-btn:focus{
    outline: none;
}
.side-btn.active{
    position: relative;
    background-color: white;
    color:teal;
    font-weight: 500;
    margin-left:10px;
    border-radius: 30px 0px 0px 30px;
}
.side-btn.active::before{
    position:absolute;
    content: "";
    top:-30px;
    right:0;
    height:30px;
    width:30px;
    background-color: white;
}
.side-btn.active::after{
    position:absolute;
    content: "";
    bottom:-30px;
    right:0;
    height:30px;
    width:30px;
    background-color: white;
}
.side-btn{
    border:none;
    padding: 16px 0px;
    font-size: 16px;
    color:white;
   background-color: transparent;
}
.side-btn.active .link-container::before{
    position:absolute;
    content:"";
    top:-60px;
    right:0;
    height:60px;
    width:60px;
    border-radius: 50%;
    background-color:teal;
}
.side-btn.active .link-container::after{
    position:absolute;
    content:"";
    bottom:-60px;
    right:0;
    height:60px;
    width:60px;
    border-radius: 50%;
    background-color:teal;
    z-index: 99;
}
</style>