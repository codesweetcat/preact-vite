import preactRefresh from '@prefresh/vite'
import { resolve } from 'path'

import type { UserConfig } from 'vite'

const config: UserConfig = {
  alias: {
    '/@/': resolve(__dirname, 'src'),
  },
  jsx: {
    factory: 'h',
    fragment: 'Fragment',
  },
  optimizeDeps: {
    include: ['preact-i18n'],
    needsInterop: ['preact-i18n'],
  },

  plugins: [preactRefresh()],

  port: 8000,
}

export default config
