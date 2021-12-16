<template>
    <div class="link">
        <div class="menu-items">
            <router-link style="text-decoration: none;" to="/login" exact-active-class="active"  tag="button" class="side-btn">
              <div class="link-container">
                  Login
              </div>
            </router-link>
            <router-link style="text-decoration: none;" to="/signup" exact-active-class="active"  tag="button" class="side-btn">
                <div class="link-container">
                     Signup   
                </div>
            </router-link>
            <router-link style="text-decoration: none;" to="/logout" exact-active-class="active"  tag="button" class="side-btn">
                <div class="link-container">
                     Logout  
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name:'loginlink'
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
    font-weight: bold;
    margin-left:10px;
    border-radius: 30px 0px 0px 30px;
}
.side-btn.active::before{
    position:absolute;
    content: "";
    top:-10px;
    right:0;
    height:10px;
    width:10px;
    background-color: white;
}
.side-btn.active::after{
    position:absolute;
    content: "";
    bottom:-10px;
    right:0;
    height:10px;
    width:10px;
    background-color: white;
}
.side-btn{
    border:none;
    padding: 10px 0px;
    font-size: 12px;
    color:white;
   background-color: transparent;
}
.side-btn.active .link-container::before{
    position:absolute;
    content:"";
    top:-20px;
    right:0;
    height:20px;
    width:20px;
    border-radius: 50%;
    background-color:teal;
}
.side-btn.active .link-container::after{
    position:absolute;
    content:"";
    bottom:-20px;
    right:0;
    height:20px;
    width:20px;
    border-radius: 50%;
    background-color:teal;
    z-index: 99;
}
</style>