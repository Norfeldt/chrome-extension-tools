import { CrxPlugin } from './types'

export const xstateCompat = (): CrxPlugin => {
  ;(Uint8Array.prototype as any)['toJSON'] = () => 'Uint8Array'
  return {
    name: 'xstate-compat',
    crx: true,
    configureServer(server) {
      ;(server as any)['toJSON'] = () => 'ViteDevServer'
    },
  }
}