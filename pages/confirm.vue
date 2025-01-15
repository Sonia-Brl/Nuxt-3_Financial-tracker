<template>
    <UCard>
        <template #header>
            Sign in ...
        </template>
        Wait a minute while we sign you in
    </UCard>
</template>

<script setup>
// http://localhost:3000/confirm
useRedirectIfAuthenticated();
</script>