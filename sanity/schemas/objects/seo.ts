import {defineField, defineType} from 'sanity'

export const seo = defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Meta title',
      type: 'string',
      validation: (Rule) => Rule.required().max(70),
    }),
    defineField({
      name: 'description',
      title: 'Meta description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().max(160),
    }),
    defineField({
      name: 'ogTitle',
      title: 'Open Graph title',
      type: 'string',
      validation: (Rule) => Rule.required().max(70),
    }),
    defineField({
      name: 'ogDescription',
      title: 'Open Graph description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: 'canonicalUrl',
      title: 'Canonical URL',
      type: 'url',
    }),
    defineField({
      name: 'ogImage',
      title: 'Open Graph image',
      type: 'cmsImage',
    }),
  ],
})
