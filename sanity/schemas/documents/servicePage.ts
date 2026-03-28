import {defineArrayMember, defineField, defineType} from 'sanity'

export const servicePage = defineType({
  name: 'servicePage',
  title: 'Service Page',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),
    defineField({name: 'summary', title: 'Summary', type: 'text'}),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'cmsImage',
    }),
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [defineArrayMember({type: 'block'})],
    }),
    defineField({name: 'seo', title: 'SEO', type: 'seo'}),
  ],
})
