import type { allLocales } from '@faker-js/faker';

export type GeneratorLocale = keyof Omit<typeof allLocales, 'base'> | 'unknown';
