import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {apiVersion, dataset, projectId} from '@/studio/env'
import {schemaTypes} from '@/studio/schemas'
import {singletonTypes} from '@/studio/singletons'
import {structure} from '@/studio/structure'

export const studioConfig = defineConfig({
  name: 'default',
  title: 'TruVis CMS',
  basePath: '/studio',
  projectId,
  dataset,
  apiVersion,
  plugins: [structureTool({structure}), visionTool()],
  schema: {
    types: schemaTypes,
    templates: (templates) =>
      templates.filter(({schemaType}) => !singletonTypes.has(schemaType)),
  },
  document: {
    actions: (actions, context) =>
      singletonTypes.has(context.schemaType)
        ? actions.filter(({action}) => action !== 'duplicate')
        : actions,
  },
})
