// uno.config.ts
import {
  defineConfig,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

export default defineConfig({
  shortcuts: [],
  theme: {
    colors: {}
  },
  rules: [],
  presets: [
    presetUno(),
    presetIcons({
      prefix: 'i-',
      extraProperties: {
        display: 'inline-block'
      }
    }),
    presetTypography(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        title: 'Pacifico',
        lato: [
          {
            name: 'Playwrite BE VLG',
            weights: [100, 400]
          }
        ],
        clock: 'Quantico'
      }
    })
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()]
})
