import { ISchema } from '@formily/react'

export const Submit: ISchema = {
  type: 'object',
  properties: {
    size: {
      type: 'string',
      enum: ['large', 'small', 'middle', { value: null }],
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      'x-component-props': {
        defaultValue: 'middle',
      },
    },
  },
}
