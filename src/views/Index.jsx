import { defineComponent, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import Logo from '@/components/Logo.vue'
import { GithubIcon } from '@/components/icons/brands'
import { handleScroll, isDark, scrolling, toggleDarkMode } from '@/composables'
import { MoonIcon, SunIcon, EyeIcon } from '@heroicons/vue/outline'
import desktopLight from '@/assets/images/showcase/desktop-light.svg'
import desktopDark from '@/assets/images/showcase/desktop-dark.svg'
import mobileDark from '@/assets/images/showcase/mobile-dark.svg'
import mobileDark2 from '@/assets/images/showcase/mobile-dark-2.svg'
import mobileLight from '@/assets/images/showcase/mobile-light.svg'
import mobileLight2 from '@/assets/images/showcase/mobile-light-2.svg'
import Button from '@/components/Button.vue'
import { warnToast } from '@/toast'

const Navbar = defineComponent({
  setup() {
    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return () => (
      <nav
        class={[
          'fixed bottom-0 md:top-0 md:bottom-auto inset-x-0 duration-500 transition-all z-20',
          {
            'shadow-t-lg md:shadow-lg bg-white dark:bg-gray-700 translate-y-full md:-translate-y-full': scrolling.down,
            'shadow-t-lg md:shadow-lg bg-white dark:bg-gray-700': scrolling.up,
          },
        ]}
      >
        <div class="relative max-w-7xl mx-auto flex items-center justify-between p-4 md:h-24">
          {/* Logo */}
          <a href="#" class="inline-block rounded-md p-2 bg-white dark:bg-dark-eval-1">
            <span class="sr-only">Home</span>
            <Logo class="w-10 h-auto md:w-12" />
          </a>

          {/* Dark mode button */}
          <Button onClick={() => { toggleDarkMode() }} iconSizeClasses iconOnly variant="secondary">
            {({ iconSizeClasses }) => (
              <>
                <MoonIcon v-show={!isDark.value} class={iconSizeClasses} />
                <SunIcon v-show={isDark.value} class={iconSizeClasses} />
              </>
            )}
          </Button>
        </div>
      </nav>
    )
  },
})

const CTAButtons = defineComponent({
  setup() {
    return () => (
      <div class="flex flex-col items-center justify-center gap-6 lg:flex-row">
        <Button to={{ name: 'Dashboard' }} class="w-full justify-center items-center gap-2">
          {({ iconSizeClasses }) => (
            <>
              <EyeIcon aria-hidden="true" class={iconSizeClasses} />
              <span class="whitespace-nowrap">Live Preview</span>
            </>
          )}
        </Button>

        <Button
          href="https://github.com/kamona-ui/kui-dashboard-vue"
          target="_blank"
          class="w-full justify-center items-center gap-2"
          variant="black"
        >
          {({ iconSizeClasses }) => (
            <>
              <GithubIcon aria-hidden="true" class={iconSizeClasses} />
              <span class="whitespace-nowrap">Github</span>
            </>
          )}
        </Button>
      </div>
    )
  },
})

export default defineComponent({
  setup() {
    onMounted(() => {
      // TODO: start animation after load images.
      gsap.from(['#mobile2Showcase', '#mobile1Showcase'], {
        rotateZ: 0,
        rotateY: 0,
        rotateX: 0,
        duration: 2,
      })

      gsap.from(['#desktopShowcase'], {
        rotateZ: 0,
        rotateY: 0,
        rotateX: 0,
        duration: 2,
        onComplete: () => {
          warnToast({
            text: 'This template is not finished yet and still in design phase. We are building it in public.',
          })
        },
      })
    })

    return () => (
      <div class="min-h-screen text-gray-900 bg-gray-100 dark:bg-dark-bg">
        <Navbar />

        <main>
          <h1 class="sr-only">K UI Dashboard Template</h1>

          {/* Introsection */}
          <section class="relative min-h-screen overflow-hidden bg-gradient-to-tr from-purple-500 via-blue-300 to-indigo-400 dark:from-purple-900 dark:via-blue-900 dark:to-indigo-800">
            <h2 class="sr-only">Showcase</h2>

            {/* Background */}
            <div class="absolute inset-x-[-10vw] top-0 bottom-20 md:bottom-0 md:top-24 rounded-[77vw/50vw] rounded-t-none md:rounded-b-none md:rounded-[77vw/50vw] bg-white dark:bg-dark-bg"></div>

            <div class="px-6 pb-24 md:pt-28 mx-auto max-w-7xl">
              <div class="grid gap-5 perspective-100vw md:grid-cols-4 md:grid-rows-1">
                {/* Left */}
                <div class="hidden md:flex items-center justify-center transform-style-3d">
                  <div
                    id="mobile2Showcase"
                    class="w-full h-full flex items-center justify-center rotate-x-25 rotate-y-25 rotate-z--15"
                  >
                    <img v-show={!isDark.value} src={mobileLight2} class="h-auto w-[70%] drop-shadow-2xl" />
                    <img v-show={isDark.value} src={mobileDark2} class="h-auto w-[70%] drop-shadow-2xl" />
                  </div>
                </div>

                {/* Center */}
                <div class="transform-style-3d flex flex-col gap-10 items-center justify-center md:pb-18 col-span-3 row-start-2 md:row-start-1 md:col-span-2 md:col-start-2">
                  <div class="flex items-center mt-10 md:mt-4 justify-center transform-style-3d">
                    <img
                      v-show={!isDark.value}
                      id="desktopShowcase"
                      class="rotate-x-15 w-[75%] md:w-full"
                      src={desktopLight}
                      alt="Desktop showcase"
                    />
                    <img
                      v-show={isDark.value}
                      id="desktopShowcase"
                      class="rotate-x-15 w-[75%] md:w-full"
                      src={desktopDark}
                      alt="Desktop showcase"
                    />
                  </div>

                  <CTAButtons />
                </div>

                {/* Right */}
                <div class="hidden md:flex items-center justify-center transform-style-3d">
                  <div
                    id="mobile1Showcase"
                    class="w-full h-full flex items-center justify-center rotate-x-25 rotate-y--25 rotate-z-15"
                  >
                    <img v-show={!isDark.value} src={mobileLight} class="h-auto w-[70%] drop-shadow-2xl" />
                    <img v-show={isDark.value} src={mobileDark} class="h-auto w-[70%] drop-shadow-2xl" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    )
  },
})
