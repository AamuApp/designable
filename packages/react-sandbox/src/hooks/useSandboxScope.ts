import { globalThisPolyfill } from '@aamuapp/designable-shared'

export const useSandboxScope = () => {
  return globalThisPolyfill['__DESIGNABLE_SANDBOX_SCOPE__']
}
