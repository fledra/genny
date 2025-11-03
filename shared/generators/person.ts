import type { GeneratorLocale } from '#shared/types/generator';
import type { Person } from '#shared/types/person';

import { allFakers } from '@faker-js/faker';

function getZodiacSign(date: Date): string {
  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDay();

  const signs = [
    { name: 'Capricorn', range: [1, 19] },
    { name: 'Aquarius', range: [2, 18] },
    { name: 'Pisces', range: [3, 20] },
    { name: 'Aries', range: [4, 19] },
    { name: 'Taurus', range: [5, 20] },
    { name: 'Gemini', range: [6, 20] },
    { name: 'Cancer', range: [7, 22] },
    { name: 'Leo', range: [8, 22] },
    { name: 'Virgo', range: [9, 22] },
    { name: 'Libra', range: [10, 22] },
    { name: 'Scorpio', range: [11, 21] },
    { name: 'Sagittarius', range: [12, 21] },
    { name: 'Capricorn', range: [12, 31] },
  ] as const;

  const index = signs.findIndex(({ range }) => month < range[0] || (month === range[0] && day <= range[1]));
  const sign = signs[index];

  if (!sign) throw new Error('Invalid date');

  return sign.name;
}

export default async function generatePerson(locale: GeneratorLocale): Promise<Person> {
  const faker = allFakers[locale as keyof typeof allFakers];

  const birthDate = faker.date.birthdate({ mode: 'age', min: 18, max: 80 });
  const sexType = faker.person.sexType();

  const firstName = faker.person.firstName(sexType);
  const middleName = faker.person.middleName(sexType);
  const lastName = faker.person.lastName();
  const sex = String(sexType[0]).toUpperCase() + sexType.slice(1);

  const creditCardIssuer = faker.finance.creditCardIssuer();
  const creditCardNumber = faker.finance.creditCardNumber(creditCardIssuer).replace(/-/g, ' ');

  return {
    firstName,
    middleName,
    lastName,
    sex,

    birthday: birthDate,
    age: new Date().getUTCFullYear() - birthDate.getUTCFullYear(),
    zodiacSign: getZodiacSign(birthDate),

    bloodType: faker.helpers.arrayElement(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', '0-', '0+']),
    height: faker.number.int({ min: 100, max: 210 }),
    weight: faker.number.int({ min: 40, max: 200 }),

    email: faker.internet.email({ firstName, lastName }).toLowerCase(),
    username: faker.internet.username({ firstName, lastName }),
    password: faker.internet.password({
      length: faker.number.int({ min: 8, max: 20 }),
      memorable: true,
    }),

    creditCardIssuer: creditCardIssuer.replace(/[-_]/g, ' '),
    creditCardNumber,
    creditCardExpiration: faker.date.future({ years: faker.number.int({ min: 1, max: 3 }) }),
    creditCardCCV: Number(faker.finance.creditCardCVV()),
  };
}
