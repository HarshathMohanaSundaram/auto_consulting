import { createWebHistory, createRouter } from "vue-router";

import Dashboard from "@/components/Dashboard.vue";
import Home from "@/components/Home.vue";
import Vehicle from "@/components/Vehicle.vue";
import Contact from "@/components/Contact.vue";
import Admin from "@/components/Admin.vue";
import login from "@/components/login.vue";
import signup from "@/components/signup.vue";
import bike from "@/components/bikes.vue";
import scooter from "@/components/scooters.vue";
import logout from "@/components/logout.vue";

const routes =[
  {
    path:"",
    name:"Dashboard",
    component:Dashboard,
    children:[
      {
        path:"",
        name:"Home",
        component:Home,
      },
      {
        path:"/vehicle",
        name:"Vehicle",
        component:Vehicle,
        children:[
          {
            path:"/bike",
            name:"bike",
            component:bike
          },
          {
            path:"/scooter",
            name:"scooter",
            component:scooter
          },
        ]
      },
      {
        path:"/contact",
        name:"Contact",
        component:Contact,
      },
      {
        path:"/admin",
        name:"Admin",
        component:Admin,
        children:[
          {
            path:"/login",
            name:"login",
            component:login
          },
          {
            path:"/signup",
            name:"signup",
            component:signup
          },
          {
            path:"/logout",
            name:logout,
            component:logout
          }
        ]
      }
    ]
  }
];

const router= createRouter({
  history:createWebHistory(),
  routes,
});
export default router;