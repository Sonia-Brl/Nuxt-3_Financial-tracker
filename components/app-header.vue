<template>
  <header class="flex justify-between items-center p-4">
    <NuxtLink to="/" class="text-xl font-bold"> Financial Tracker </NuxtLink>
    <div>
      <UAvatar src="https://avatars.githubusercontent.com/u/69713925?v=4&size=64" alt="Avatar" />
    </div>
  </header>
</template>

<script setup>
const user = useSupabaseUser()
watch(user, (user) => {
  if (user) {
    console.log(user)
  }
}, { immediate: true })
</script>