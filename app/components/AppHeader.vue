<script setup lang="ts">
const appConfig = useAppConfig();
</script>

<template>
    <header class="mb-6">
        <h1 class="text-2xl sm:text-3xl font-semibold text-gray-800">
            {{ appConfig.title }}
        </h1>
        <p class="text-sm text-gray-500 mt-1">
            {{ appConfig.description }}
        </p>
    </header>
</template>
