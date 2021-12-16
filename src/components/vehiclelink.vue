<template>
    <div class="link">
        <div class="menu-items">
            <router-link style="text-decoration: none;" to="/bike" exact-active-class="active"  tag="button" class="side-btn">
              <div class="link-container">
                  Bike
              </div>
            </router-link>
            <router-link style="text-decoration: none;" to="/scooter" exact-active-class="active"  tag="button" class="side-btn">
                <div class="link-container">
                     Scooter  
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name:'vehiclelink'
}
</script>

<style scoped>
.menu-items{
    display: flex;
    flex-direction: column;
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
    top:-15px;
    right:0;
    height:15px;
    width:15px;
    background-color: white;
}
.side-btn.active::after{
    position:absolute;
    content: "";
    bottom:-20px;
    right:0;
    height:20px;
    width:20px;
    background-color: white;
}
.side-btn{
    border:none;
    padding: 14px 0px;
    font-size: 14px;
    color:white;
   background-color: transparent;
}
.side-btn.active .link-container::before{
    position:absolute;
    content:"";
    top:-30px;
    right:0;
    height:30px;
    width:30px;
    border-radius: 50%;
    background-color:teal;
}
.side-btn.active .link-container::after{
    position:absolute;
    content:"";
    bottom:-30px;
    right:0;
    height:30px;
    width:30px;
    border-radius: 50%;
    background-color:teal;
    z-index: 99;
}
</style>