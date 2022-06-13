<template>
	<aside class="left-sidebar" data-sidebarbg="skin5">
		<!-- Sidebar scroll-->
		<div class="scroll-sidebar">
			<!-- Sidebar navigation-->
			<nav class="sidebar-nav">
				<ul id="sidebarnav" class="pt-4">
					<li class="sidebar-item">
						<router-link
							:to="{ name: 'home' }"
							class="sidebar-link waves-effect waves-dark sidebar-link"
							aria-expanded="false"
						>
							<i class="mdi mdi-view-dashboard"></i
							><span class="hide-menu">Dashboard</span>
						</router-link>
					</li>
					<li class="sidebar-item">
						<router-link
							:to="{ name: 'charts' }"
							class="sidebar-link waves-effect waves-dark sidebar-link"
							aria-expanded="false"
							><i class="mdi mdi-chart-bar"></i
							><span class="hide-menu">Charts</span>
						</router-link>
					</li>
					<li class="sidebar-item">
						<router-link
							:to="{ name: 'fullwidth' }"
							class="sidebar-link waves-effect waves-dark sidebar-link"
							aria-expanded="false"
							><i class="mdi mdi-blur-linear"></i
							><span class="hide-menu">Full Width</span>
						</router-link>
					</li>
					<li class="sidebar-item">
						<a
							class="sidebar-link has-arrow waves-effect waves-dark"
							href="javascript:void(0)"
							aria-expanded="false"
							><i class="mdi mdi-receipt"></i
							><span class="hide-menu">Forms </span></a
						>
						<ul aria-expanded="false" class="collapse first-level">
							<li class="sidebar-item">
								<router-link :to="{ name: 'formbasic' }" class="sidebar-link"
									><i class="mdi mdi-note-outline"></i
									><span class="hide-menu"> Form Basic </span>
								</router-link>
							</li>
							<li class="sidebar-item">
								<router-link :to="{ name: 'formwizard' }" class="sidebar-link"
									><i class="mdi mdi-note-plus"></i
									><span class="hide-menu"> Form Wizard </span>
								</router-link>
							</li>
						</ul>
					</li>
					<li class="sidebar-item">
						<router-link
							:to="{ name: 'error403component' }"
							class="sidebar-link"
							><i class="mdi mdi-alert-octagon"></i
							><span class="hide-menu"> Error 403 </span>
						</router-link>
					</li>
					<li class="sidebar-item p-3">
						<a
							href="https://www.google.com/"
							target="_blank"
							class="w-100 btn btn-danger d-flex align-items-center text-white"
							><i class="mdi mdi-google font-20 me-2"></i>Goggle</a
						>
					</li>
				</ul>
			</nav>
			<!-- End Sidebar navigation -->
		</div>
		<!-- End Sidebar scroll-->
	</aside>
</template>

<script>
export default {
	name: 'LeftSidebarComponent'
};
</script>

<style>
.sidebar-item .router-link-exact-active {
	background: #27a9e3;
}
</style>
