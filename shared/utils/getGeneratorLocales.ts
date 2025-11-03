import { allLocales, type MetadataDefinition } from '@faker-js/faker';

export default function getGeneratorLocales() {
  return Object
    .values(allLocales)
    .map(({ metadata }) => metadata)
    .filter((locale) => locale && locale.code !== 'base') as MetadataDefinition[];
}
