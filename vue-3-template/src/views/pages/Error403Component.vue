<template>
	<div class="card">
		<div class="card-body">
			<div class="error-body text-center">
				<h1 class="error-title text-danger">403</h1>
				<h3 class="text-uppercase error-subtitle">PAGE NOT FOUND !</h3>
				<p class="text-muted mt-4 mb-4">
					YOU SEEM TO BE TRYING TO FIND HIS WAY HOME
				</p>
				<router-link
					:to="{ name: 'home' }"
					class="btn btn-danger btn-rounded waves-effect waves-light mb-5 text-white"
					>Back to home</router-link
				>
			</div>
		</div>
	</div>
</template>
<script>
import useBreadcrumbAndTitle from '../../composables/breadcrumb_and_title_composable';
export default {
	name: 'Error403Component',
	setup() {
		const {
			cheange_breadcrumb_links,
			cheange_breadcrumb_heading_and_title_heading
		} = useBreadcrumbAndTitle();

		cheange_breadcrumb_heading_and_title_heading('Error 403');

		cheange_breadcrumb_links([
			{ name: 'Home', name_of_route: 'home', disabled: false },
			{ name: 'Error 403', name_of_route: 'error403component', disabled: true }
		]);
	}
};
</script>

<style></style>
