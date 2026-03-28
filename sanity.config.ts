import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {apiVersion, dataset, projectId} from '@/sanity/env'
import {schemaTypes} from '@/sanity/schemas'
import {singletonTypes} from '@/sanity/singletons'
import {structure} from '@/sanity/structure'

export default defineConfig({
  name: 'default',
  title: 'TruVis CMS',
  basePath: '/studio',
  projectId: projectId || 'missing-project-id',
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
