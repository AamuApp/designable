import { GlobalRegistry, IDesignerRegistry } from '@aamuapp/designable-core'
import { globalThisPolyfill } from '@aamuapp/designable-shared'

export const useRegistry = (): IDesignerRegistry => {
  return globalThisPolyfill['__DESIGNER_REGISTRY__'] || GlobalRegistry
}
