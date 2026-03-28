import {defineField, defineType} from 'sanity'

export const problemPattern = defineType({
  name: 'problemPattern',
  title: 'Problem Pattern',
  type: 'object',
  fields: [
    defineField({
      name: 'number',
      title: 'Pattern Label',
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
      name: 'body',
      title: 'Body',
      type: 'text',
      rows: 5,
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'number',
    },
  },
})
