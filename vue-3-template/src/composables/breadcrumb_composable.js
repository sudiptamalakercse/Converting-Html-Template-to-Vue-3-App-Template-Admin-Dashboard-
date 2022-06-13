import { useStore } from 'vuex';
import { computed } from 'vue';

export default function useBreadcrumb() {
	const store = useStore();

	function cheange_breadcrumb_links(links) {
		store.dispatch('breadcrumb_module/cheange_breadcrumb_links', links);
	}

	const bread_crumb_links = computed(
		() => store.state.breadcrumb_module.bread_crumb_links
	);

	return { bread_crumb_links, cheange_breadcrumb_links };
}
