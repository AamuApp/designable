import React from 'react'
import { Space as FormilySpace } from '@formily/antd-v5'
import { createBehavior, createResource } from '@ilkkah/designable-core'
import { DnFC } from '@ilkkah/designable-react'
import { createVoidFieldSchema } from '../Field'
import { withContainer } from '../../common/Container'
import { AllSchemas } from '../../schemas'
import { AllLocales } from '../../locales'

export const Space: DnFC<React.ComponentProps<typeof FormilySpace>> =
  withContainer(FormilySpace)

Space.Behavior = createBehavior({
  name: 'Space',
  extends: ['Field'],
  selector: (node) => node.props['x-component'] === 'Space',
  designerProps: {
    droppable: true,
    inlineChildrenLayout: true,
    propsSchema: createVoidFieldSchema(AllSchemas.Space),
  },
  designerLocales: AllLocales.Space,
})

Space.Resource = createResource('Layouts', {
  icon: 'SpaceSource',
  elements: [
    {
      componentName: 'Field',
      props: {
        type: 'void',
        'x-component': 'Space',
      },
    },
  ],
})
