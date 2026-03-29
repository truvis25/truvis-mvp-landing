import {defineField, defineType} from 'sanity'

export const pricingMilestone = defineType({
  name: 'pricingMilestone',
  title: 'Pricing Milestone',
  type: 'object',
  fields: [
    defineField({
      name: 'pct',
      title: 'Percentage',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'trigger',
      title: 'Trigger',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'desc',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'trigger',
      subtitle: 'pct',
    },
  },
})
