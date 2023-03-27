import React from 'react'
import { Submit as FormilySubmit } from '@formily/antd-v5'
import { createBehavior, createResource } from '@aamuapp/designable-core'
import { DnFC } from '@aamuapp/designable-react'
import { createFieldSchema } from '../Field'
import { AllSchemas } from '../../schemas'
import { AllLocales } from '../../locales'

export const Submit: DnFC<React.ComponentProps<typeof FormilySubmit>> =
  FormilySubmit

Submit.Behavior = createBehavior({
  name: 'Submit',
  extends: ['Field'],
  selector: (node) => node.props['x-component'] === 'Submit',
  designerProps: {
    propsSchema: createFieldSchema(AllSchemas.Input),
  },
  designerLocales: AllLocales.Submit,
})

Submit.Resource = createResource('Inputs', {
  icon: 'SubmitButtonSource',
  elements: [
    {
      componentName: 'Field',
      props: {
        type: 'string',
        title: 'Submit',
        'x-decorator': 'FormItem',
        'x-component': 'Submit',
      },
    },
  ],
})
