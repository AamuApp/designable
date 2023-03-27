import React from 'react'
import { useTree, usePrefix } from '../../hooks'
import { observer, ReactFC } from '@formily/reactive-react'
import { IconWidget } from '../IconWidget'
import './styles.less'

export interface IEmptyWidgetProps {
  dragTipsDirection?: 'left' | 'right'
}

export const EmptyWidget: ReactFC<IEmptyWidgetProps> = observer((props) => {
  const tree = useTree()
  const prefix = usePrefix('empty')
  const renderEmpty = () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div className="animations">
          <IconWidget
            infer={
              props.dragTipsDirection === 'left'
                ? 'DragLeftSourceAnimation'
                : 'DragRightSourceAnimation'
            }
            size={240}
          />
        </div>
        <div className="hotkeys-list">
          <div>Your form looks empty, go and add some fields into it!</div>
        </div>
      </div>
    )
  }
  if (!tree?.children?.length) {
    return (
      <div className={prefix}>
        {props.children ? props.children : renderEmpty()}
      </div>
    )
  }
  return null
})

EmptyWidget.defaultProps = {
  dragTipsDirection: 'left',
}
