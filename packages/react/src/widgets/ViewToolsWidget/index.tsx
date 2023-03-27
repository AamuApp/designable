import React from 'react'
import { Button } from 'antd'
import { observer, ReactFC } from '@formily/reactive-react'
import { WorkbenchTypes } from '@aamuapp/designable-core'
import { IconWidget } from '../IconWidget'
import { usePrefix, useWorkbench } from '../../hooks'
import cls from 'classnames'

export interface IViewToolsWidget {
  use?: WorkbenchTypes[]
  style?: React.CSSProperties
  className?: string
}

export const ViewToolsWidget: ReactFC<IViewToolsWidget> = observer(
  ({ use = [], style, className }) => {
    const workbench = useWorkbench()
    const prefix = usePrefix('view-tools')
    return (
      <Button.Group
        size="middle"
        style={style}
        className={cls(prefix, className)}
      >
        {use.includes('DESIGNABLE') && (
          <Button
            onClick={() => {
              workbench.type = 'DESIGNABLE'
            }}
            className={workbench.type === 'DESIGNABLE' ? 'ant-btn-active' : ''}
          >
            <IconWidget infer="Design" tooltip="Design" />
          </Button>
        )}
        {use.includes('JSONTREE') && (
          <Button
            className={workbench.type === 'JSONTREE' ? 'ant-btn-active' : ''}
            onClick={() => {
              workbench.type = 'JSONTREE'
            }}
          >
            <IconWidget infer="JSON" tooltip="JSON" />
          </Button>
        )}
        {use.includes('MARKUP') && (
          <Button
            className={workbench.type === 'MARKUP' ? 'ant-btn-active' : ''}
            onClick={() => {
              workbench.type = 'MARKUP'
            }}
          >
            <IconWidget infer="Code" tooltip="Code" />
          </Button>
        )}
        {use.includes('PREVIEW') && (
          <Button
            className={workbench.type === 'PREVIEW' ? 'ant-btn-active' : ''}
            onClick={() => {
              workbench.type = 'PREVIEW'
            }}
          >
            <IconWidget infer="Play" tooltip="Preview" />
          </Button>
        )}
      </Button.Group>
    )
  }
)

ViewToolsWidget.defaultProps = {
  use: ['DESIGNABLE', 'JSONTREE', 'PREVIEW'],
}
