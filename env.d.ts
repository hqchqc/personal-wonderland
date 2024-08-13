/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SITE_NAME: string
  readonly VITE_SITE_SLOGAN: string
  readonly VITE_PERSON_SLOGAN: string
  readonly VITE_SOCIAL_LINKS: string
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
