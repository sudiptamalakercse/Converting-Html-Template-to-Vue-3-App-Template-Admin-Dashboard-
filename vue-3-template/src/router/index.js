import { createRouter, createWebHistory } from 'vue-router';
// import HomeView from '../views/HomeView.vue';
import IndexComponent from '../views/pages/IndexComponent.vue';
import ChartsComponent from '../views/pages/ChartsComponent.vue';
import FullWidthComponent from '../views/pages/FullWidthComponent.vue';
import FormBasicComponent from '../views/pages/FormBasicComponent.vue';
import FormWizardComponent from '../views/pages/FormWizardComponent.vue';
import Error403Component from '../views/pages/Error403Component.vue';

const routes = [
	{
		path: '/',
		name: 'home',
		component: IndexComponent
	},
	{
		path: '/charts',
		name: 'charts',
		component: ChartsComponent
	},
	{
		path: '/fullwidth',
		name: 'fullwidth',
		component: FullWidthComponent
	},
	{
		path: '/formbasic',
		name: 'formbasic',
		component: FormBasicComponent
	},
	{
		path: '/formwizard',
		name: 'formwizard',
		component: FormWizardComponent
	},
	{
		path: '/error403component',
		name: 'error403component',
		component: Error403Component
	}
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
});

export default router;
