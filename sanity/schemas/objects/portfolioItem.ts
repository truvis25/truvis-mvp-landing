import {defineField, defineType} from 'sanity'

export const portfolioItem = defineType({
  name: 'portfolioItem',
  title: 'Portfolio Item',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Project Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'scale',
      title: 'Scale',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'relevance',
      title: 'Relevance',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo (optional)',
      type: 'cmsImage',
    }),
  ],
})
