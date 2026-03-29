import {defineField, defineType} from 'sanity'

export const solutionPillar = defineType({
  name: 'solutionPillar',
  title: 'Solution Pillar',
  type: 'object',
  fields: [
    defineField({name: 'icon', title: 'Icon', type: 'string'}),
    defineField({name: 'title', title: 'Title', type: 'string', validation: (rule) => rule.required()}),
    defineField({name: 'body', title: 'Body', type: 'text', rows: 4, validation: (rule) => rule.required()}),
  ],
})
