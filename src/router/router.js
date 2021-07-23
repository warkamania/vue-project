import Main from "@/page/Main"
import {createRouter,createWebHistory} from "vue-router"
import postPage from '@/page/postPage'
import postidPage from '@/page/postidPage'
const routes =[
    {
        path: '/',
        component: Main
    },
    {
        path: '/Post',
        component: postPage
    },
    {
        path: '/Post/:id',
        component: postidPage
    }
]

const router = createRouter({
   routes,
    
    history: createWebHistory(process.env.BASE_URL) 
})

export default router