import { useContext, useEffect } from 'react'
import { Engine } from '@ilkkah/designable-core'
import { DesignerEngineContext } from '../context'
import { isFn, globalThisPolyfill } from '@ilkkah/designable-shared'
export interface IEffects {
  (engine: Engine): void
}

export const useDesigner = (effects?: IEffects): Engine => {
  const designer: Engine =
    globalThisPolyfill['__DESIGNABLE_ENGINE__'] ||
    useContext(DesignerEngineContext)
  useEffect(() => {
    if (isFn(effects)) {
      return effects(designer)
    }
  }, [])
  return designer
}
