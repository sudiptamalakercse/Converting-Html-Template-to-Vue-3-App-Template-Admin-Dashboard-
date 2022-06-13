<template>
	<div class="card">
		<div class="card-body">
			<h1>Some Form Wizards Will Be Here...</h1>
		</div>
	</div>
</template>
<script>
import useBreadcrumb from '../../composables/breadcrumb_composable';
export default {
	name: 'FormWizardComponent',
	setup() {
		const { cheange_breadcrumb_links } = useBreadcrumb();

		cheange_breadcrumb_links([
			{ name: 'Home', name_of_route: 'home', disabled: false },
			{ name: 'Form Wizard', name_of_route: 'formwizard', disabled: true }
		]);
	}
};
</script>

<style></style>
