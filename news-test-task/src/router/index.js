import Vue from 'vue'
import VueRouter from 'vue-router'
import News from "@/components/News";
import NewsItemPage from "@/components/NewsItemPage";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/News'
    },
    {
        path: '/News',
        name: 'News',
        component: News,

        // children: [
        //     {
        //         path: ':id',
        //         name: 'News.NewsItemPage',
        //         component: NewsItemPage,
        //         props: true,
        //     },
        // ],
    },
    {
        path: '/News/:id',
        name: "NewsItemPage",
        component: NewsItemPage,
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router