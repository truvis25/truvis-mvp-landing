import {defineField, defineType} from 'sanity'

export const processStep = defineType({
  name: 'processStep',
  title: 'Process Step',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'points',
      title: 'Points',
      type: 'array',
      of: [{type: 'string'}],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'dark',
      title: 'Dark style card',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'label',
    },
  },
})
