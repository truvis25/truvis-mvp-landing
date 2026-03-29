import {defineField, defineType} from 'sanity'

export const comparisonRow = defineType({
  name: 'comparisonRow',
  title: 'Comparison Row',
  type: 'object',
  fields: [
    defineField({
      name: 'agency',
      title: 'Typical Agency Model',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'truvis',
      title: 'TruVis Model',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {title: 'agency'},
    prepare({title}) {
      return {title: title || 'Comparison row'}
    },
  },
})
