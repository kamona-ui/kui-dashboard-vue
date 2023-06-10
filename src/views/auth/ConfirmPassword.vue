<script setup>
import { reactive } from 'vue'
import InputIconWrapper from '@/components/InputIconWrapper.vue'
import Button from '@/components/Button.vue'
import Input from '@/components/Input.vue'
import Label from '@/components/Label.vue'

const confirmPasswordForm = reactive({
    password: '',
    processing: false,
})

const submit = () => {
    //
}
</script>

<template>
    <div class="mb-4 text-sm text-gray-600 dark:text-gray-400">
        This is a secure area of the application. Please confirm your password
        before continuing.
    </div>

    <form @submit.prevent="submit">
        <div class="grid gap-4">
            <div class="space-y-2">
                <Label for="password" value="Password" />

                <InputIconWrapper icon="mdi:lock-outline">
                    <Input
                        withIcon
                        id="password"
                        type="password"
                        class="block w-full"
                        placeholder="Password"
                        v-model="confirmPasswordForm.password"
                        required
                        autocomplete="current-password"
                        autofocus
                    />
                </InputIconWrapper>
            </div>

            <div>
                <Button
                    type="submit"
                    class="justify-center w-full"
                    :disabled="confirmPasswordForm.processing"
                >
                    Confirm
                </Button>
            </div>
        </div>
    </form>
</template>
