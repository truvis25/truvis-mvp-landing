import {defineField, defineType} from 'sanity'

export const cmsImage = defineType({
  name: 'cmsImage',
  title: 'Image',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Image file',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'alt',
      title: 'Alt text',
      type: 'string',
      description: 'Describe the image for accessibility and SEO.',
      validation: (Rule) => Rule.required().min(5).max(160),
    }),
  ],
})
