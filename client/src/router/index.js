import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/HomePage/Home";
import Login from "@/components/Login";
import Payment from "@/components/Payment";
import Will from "@/components/Will";
import Witnesses from "@/components/Witnesses";
Vue.use(Router);

export default new Router({
	routes: [
		{
			path: "/",
			name: "Home",
			component: Home,
			meta: {
				requiresAuth: true 
			}
		},
		{
			path: "/login",
			name: "Login",
			component: Login,
		},
		{
			path: "/payment",
			name: "Payment",
			component: Payment,
		},
		{
			path: "/will",
			name: "Will",
			component: Will,
		},
		{
			path: "/witnesses",
			name: "Witnesses",
			meta: {
				requiresAuth: true 
			},
			component: Witnesses,
		},
	],
});
