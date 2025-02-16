
<script lang="ts">
    import { PUBLIC_SITE_LOGO, PUBLIC_SITE_NAME, PUBLIC_SITE_TITLE } from '$env/static/public';
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
  <title>{PUBLIC_SITE_TITLE}</title>
  <meta name="description" content={PUBLIC_SITE_NAME} />
</svelte:head>

<div class="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
    <img src="/logo.png" alt="Company Logo" class="mb-8 h-32 w-auto" />
    {@render children()}
</div>
