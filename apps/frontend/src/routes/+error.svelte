<script lang="ts">
    import { page } from '$app/stores';
  </script>
  
  <div class="min-h-screen flex items-center justify-center bg-gray-100 p-4">
    <div class="text-center">
      <h1 class="text-4xl font-bold text-red-600 mb-4">Error {$page.status}</h1>
      <p class="text-xl text-gray-800">{$page.error.message}</p>
      <a href="/" class="mt-4 inline-block text-blue-600 hover:text-blue-800">
        ← Return to Home
      </a>
    </div>
  </div>
