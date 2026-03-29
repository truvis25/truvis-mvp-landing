import {defineField, defineType} from 'sanity'

export const teamMember = defineType({
  name: 'teamMember',
  title: 'Team Member',
  type: 'object',
  fields: [
    defineField({name: 'name', title: 'Name', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'role', title: 'Role', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'badge', title: 'Badge', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({
      name: 'points',
      title: 'Bullet points',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'featured',
      title: 'Featured card',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({name: 'photo', title: 'Photo', type: 'cmsImage'}),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'photo.image',
    },
  },
})
