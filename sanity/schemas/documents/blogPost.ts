import {defineField, defineType} from 'sanity'

export const blogPost = defineType({
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string', validation: (rule) => rule.required()}),
    defineField({name: 'slug', title: 'Slug', type: 'slug', options: {source: 'title'}, validation: (rule) => rule.required()}),
    defineField({name: 'excerpt', title: 'Excerpt', type: 'text'}),
    defineField({name: 'coverImage', title: 'Cover Image', type: 'cmsImage'}),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({name: 'publishedAt', title: 'Published At', type: 'datetime'}),
    defineField({name: 'seo', title: 'SEO', type: 'seo'}),
  ],
})
