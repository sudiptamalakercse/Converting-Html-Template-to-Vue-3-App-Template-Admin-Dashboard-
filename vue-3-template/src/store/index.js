import { createStore } from 'vuex';
import breadcrumb_module from './modules/page_breadcrumb/index';

export default createStore({
	modules: {
		breadcrumb_module
	}
});
