import {defineField, defineType} from 'sanity'

export const pricingPackage = defineType({
  name: 'pricingPackage',
  title: 'Pricing Package',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'amount',
      title: 'Amount',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [{type: 'string'}],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'accent',
      title: 'Accent',
      type: 'string',
      options: {
        list: [
          {title: 'Navy', value: 'navy'},
          {title: 'Azure', value: 'azure'},
        ],
        layout: 'radio',
      },
      initialValue: 'navy',
      validation: (rule) => rule.required(),
    }),
  ],
})
