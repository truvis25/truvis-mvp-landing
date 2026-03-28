import type {StructureResolver} from 'sanity/structure'
import {singletonTypes} from './singletons'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Landing Page')
        .id('landingPage')
        .child(S.document().schemaType('landingPage').documentId('landingPage')),
      ...S.documentTypeListItems().filter(
        (listItem) => !singletonTypes.has(listItem.getId() ?? ''),
      ),
    ])
