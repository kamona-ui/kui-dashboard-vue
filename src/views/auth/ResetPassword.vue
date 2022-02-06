<template>
    <form @submit.prevent="submit">
        <div class="grid gap-4">
            <div class="space-y-2">
                <Label for="email" value="Email" />
                <InputIconWrapper>
                    <template #icon>
                        <MailIcon aria-hidden="true" class="w-5 h-5" />
                    </template>
                    <Input
                        withIcon
                        id="email"
                        type="email"
                        placeholder="Email"
                        class="block w-full"
                        v-model="resetPasswordForm.email"
                        required
                        autofocus
                        autocomplete="username"
                    />
                </InputIconWrapper>
            </div>

            <div class="space-y-2">
                <Label for="password" value="Password" />
                <InputIconWrapper>
                    <template #icon>
                        <LockClosedIcon aria-hidden="true" class="w-5 h-5" />
                    </template>
                    <Input
                        withIcon
                        id="password"
                        type="password"
                        placeholder="Password"
                        class="block w-full"
                        v-model="resetPasswordForm.password"
                        required
                        autocomplete="new-password"
                    />
                </InputIconWrapper>
            </div>

            <div class="space-y-2">
                <Label for="password_confirmation" value="Confirm Password" />
                <InputIconWrapper>
                    <template #icon>
                        <LockClosedIcon aria-hidden="true" class="w-5 h-5" />
                    </template>
                    <Input
                        withIcon
                        id="password_confirmation"
                        type="password"
                        placeholder="Confirm Password"
                        class="block w-full"
                        v-model="resetPasswordForm.password_confirmation"
                        required
                        autocomplete="new-password"
                    />
                </InputIconWrapper>
            </div>

            <div>
                <Button
                    type="submit"
                    class="justify-center w-full"
                    :disabled="resetPasswordForm.processing"
                >Reset Password</Button>
            </div>
        </div>
    </form>
</template>

<script setup>
import { reactive } from 'vue'
import InputIconWrapper from '@/components/InputIconWrapper.vue'
import Button from '@/components/Button.vue'
import Input from '@/components/Input.vue'
import Label from '@/components/Label.vue'
import { MailIcon, LockClosedIcon } from '@heroicons/vue/outline'

const props = defineProps({
    email: String,
    token: String,
})

const resetPasswordForm = reactive({
    token: '',
    email: '',
    password: '',
    password_confirmation: '',
    processing: false
})

const submit = () => {
    // 
}
</script>
