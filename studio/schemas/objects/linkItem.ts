import {defineField, defineType} from 'sanity'

export const linkItem = defineType({
  name: 'linkItem',
  title: 'Link Item',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'href',
      title: 'Href',
      type: 'string',
      initialValue: '#',
      validation: (rule) => rule.required(),
    }),
  ],
})
