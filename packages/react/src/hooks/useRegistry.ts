import { GlobalRegistry, IDesignerRegistry } from '@ilkkah/designable-core'
import { globalThisPolyfill } from '@ilkkah/designable-shared'

export const useRegistry = (): IDesignerRegistry => {
  return globalThisPolyfill['__DESIGNER_REGISTRY__'] || GlobalRegistry
}
