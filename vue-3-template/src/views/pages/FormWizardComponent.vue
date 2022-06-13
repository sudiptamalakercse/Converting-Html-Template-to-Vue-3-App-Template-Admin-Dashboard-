<template>
	<div class="card">
		<div class="card-body">
			<h1>Some Form Wizards Will Be Here...</h1>
		</div>
	</div>
</template>
<script>
import useBreadcrumbAndTitle from '../../composables/breadcrumb_and_title_composable';
export default {
	name: 'FormWizardComponent',
	setup() {
		const {
			cheange_breadcrumb_links,
			cheange_breadcrumb_heading_and_title_heading
		} = useBreadcrumbAndTitle();

		cheange_breadcrumb_heading_and_title_heading('Form Wizard');

		cheange_breadcrumb_links([
			{ name: 'Home', name_of_route: 'home', disabled: false },
			{ name: 'Form Wizard', name_of_route: 'formwizard', disabled: true }
		]);
	}
};
</script>

<style></style>
