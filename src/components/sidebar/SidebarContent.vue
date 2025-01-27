<script setup>
import { useRouter } from 'vue-router'
import PerfrectScrollbar from '@/components/PerfectScrollbar.vue'
import SidebarLink from '@/components/sidebar/SidebarLink.vue'
import SidebarCollapsible from '@/components/sidebar/SidebarCollapsible.vue'
import SidebarCollapsibleItem from '@/components/sidebar/SidebarCollapsibleItem.vue'

const isCurrentRoute = (routeName) => {
    return useRouter().currentRoute.value.name == routeName
}

const isCurrentPath = (path) => {
    return useRouter().currentRoute.value.path.startsWith(path)
}
</script>

<template>
    <PerfrectScrollbar
        tagname="nav"
        aria-label="main"
        class="relative flex max-h-full flex-1 flex-col gap-4 px-3"
    >
        <SidebarLink
            title="Dashboard"
            :to="{ name: 'Dashboard' }"
            :active="isCurrentRoute('Dashboard')"
            icon="tabler--dashboard"
        />

        <SidebarCollapsible
            icon="tabler--file"
            title="Pages"
            :active="isCurrentPath('/pages')"
        >
            <SidebarCollapsibleItem
                :to="{ name: 'Blank' }"
                title="Blank"
                :active="isCurrentRoute('Blank')"
            />
        </SidebarCollapsible>

        <SidebarCollapsible icon="tabler--shield" title="Authentication">
            <SidebarCollapsibleItem :to="{ name: 'Login' }" title="Login" />
            <SidebarCollapsibleItem
                :to="{ name: 'Register' }"
                title="Register"
            />
            <SidebarCollapsibleItem
                :to="{ name: 'VerifyEmail' }"
                title="Verify Email"
            />
            <SidebarCollapsibleItem
                :to="{ name: 'ForgotPassword' }"
                title="Forgot Password"
            />
            <SidebarCollapsibleItem
                :to="{ name: 'ResetPassword' }"
                title="Reset Password"
            />
            <SidebarCollapsibleItem
                :to="{ name: 'ConfirmPassword' }"
                title="Confirm Password"
            />
        </SidebarCollapsible>
    </PerfrectScrollbar>
</template>
