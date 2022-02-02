<template>
    <PerfrectScrollbar
        tagname="nav"
        aria-label="main"
        class="relative flex flex-col flex-1 max-h-full gap-4 px-3"
    >
        <SidebarLink
            title="Dashboard"
            :to="{ name: 'Dashboard' }"
            :active="isCurrentRoute('Dashboard')"
        >
            <template #icon>
                <DashboardIcon class="flex-shrink-0 w-6 h-6" aria-hidden="true" />
            </template>
        </SidebarLink>

        <SidebarCollapsible title="Authentication">
            <SidebarCollapsibleItem :to="{ name: 'Login' }" title="Login" />
            <SidebarCollapsibleItem :to="{ name: 'Register' }" title="Register" />
            <SidebarCollapsibleItem :to="{ name: 'VerifyEmail' }" title="VerifyEmail" />
            <SidebarCollapsibleItem :to="{ name: 'ForgotPassword' }" title="ForgotPassword" />
            <SidebarCollapsibleItem :to="{ name: 'ResetPassword' }" title="ResetPassword" />
            <SidebarCollapsibleItem :to="{ name: 'ConfirmPassword' }" title="ConfirmPassword" />
        </SidebarCollapsible>
    </PerfrectScrollbar>
</template>

<script setup>
import { useRouter } from 'vue-router'
import PerfrectScrollbar from '@/components/PerfectScrollbar.vue'
import SidebarLink from '@/components/sidebar/SidebarLink.vue'
import { DashboardIcon } from '@/components/Icons/outline'
import SidebarCollapsible from '@/components/sidebar/SidebarCollapsible.vue'
import SidebarCollapsibleItem from '@/components/sidebar/SidebarCollapsibleItem.vue'

const isCurrentRoute = (routeName) => {
    return useRouter().currentRoute.value.name == routeName
}
</script>
