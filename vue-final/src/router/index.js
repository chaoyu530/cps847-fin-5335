import { createWebHistory, createRouter } from "vue-router"
import Home from '@/views/HomeView.vue'
import AboutUs from "@/views/AboutView.vue"
import Hourly from '@/views/HourlyView.vue'
const routes = [
{
path: "/",
name: "Home",
component: Home,
},
{
path: '/AboutUs',
name: "AboutUs",
component: AboutUs,
},
{
path: '/Hourly',
name: "HourlyView",
component: Hourly,
},
]
const router = createRouter({
  history: createWebHistory(),
  routes
  })
  export default router