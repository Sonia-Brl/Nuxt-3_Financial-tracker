<template>
    <UCard v-if="!success">
        <template #header>
            Sign in to Finace Tracker
        </template>
        <form>
            <UFormGroup label="Email" name="email" class="mb-4" :required="true"
                help="You wil receive an email with the confirmation link">
                <UInput type="email" placeholder="email" required />
            </UFormGroup>
            <UButton type="submit" variant="solid" color="black" @click="success = true">Sign-in</UButton>
        </form>
    </UCard>
    <UCard v-else>
        <template #header>
            Email has been send
        </template>
        <div class="text-center">
            <p> We have send a email to <strong>test@test.com</strong> with a link to sign in</p>
            <p><strong>The link will expire in 5 minutes.</strong></p>
        </div>
    </UCard>
</template>

<script setup>
// http://localhost:3000/login

const success = ref(false);

</script>