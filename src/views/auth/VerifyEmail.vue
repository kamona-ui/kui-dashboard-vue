<script setup>
import { reactive, ref } from 'vue'
import Button from '@/components/Button.vue'

const props = defineProps({
    status: String,
})

const verifyEmailForm = reactive({
    processing: false,
})

const verificationLinkSent = ref(false)

const submit = () => {
    verificationLinkSent.value = true
}
</script>

<template>
    <div class="mb-4 text-sm text-gray-600 dark:text-gray-400">
        Thanks for signing up! Before getting started, could you verify your
        email address by clicking on the link we just emailed to you? If you
        didn't receive the email, we will gladly send you another.
    </div>

    <div
        class="mb-4 text-sm font-medium text-green-600"
        v-if="verificationLinkSent"
    >
        A new verification link has been sent to the email address you provided
        during registration.
    </div>

    <form @submit.prevent="submit">
        <div class="flex items-center justify-between mt-4">
            <Button
                type="submit"
                :class="{ 'opacity-25': verifyEmailForm.processing }"
                :disabled="verifyEmailForm.processing"
            >
                Resend Verification Email
            </Button>

            <router-link
                :to="{ name: 'VerifyEmail' }"
                method="post"
                as="button"
                class="text-sm text-blue-600 hover:underline dark:text-blue-400"
            >
                Log Out
            </router-link>
        </div>
    </form>
</template>
