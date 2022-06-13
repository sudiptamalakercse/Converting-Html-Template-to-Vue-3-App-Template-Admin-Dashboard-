import mutations from './mutations';
import actions from './actions';

export default {
	namespaced: true,
	state() {
		return {
			bread_crumb_links: []
		};
	},
	mutations,
	actions
};
