import {defineField, defineType} from 'sanity'

export const proofStat = defineType({
  name: 'proofStat',
  title: 'Proof Stat',
  type: 'object',
  fields: [
    defineField({name: 'stat', title: 'Stat', type: 'string'}),
    defineField({name: 'label', title: 'Label', type: 'string'}),
  ],
  preview: {
    select: {title: 'stat', subtitle: 'label'},
  },
})
