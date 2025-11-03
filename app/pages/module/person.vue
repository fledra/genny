<template>
  <UPage>
    <div class="flex justify-between items-center mb-8">
      <FieldHeader title="Person" description="Generate an identity" />
      <div v-if="person" class="flex items-end gap-6">
        <UButton icon="lucide:refresh-cw" @click="() => refresh()">
          Generate
        </UButton>
        <LocaleSelect v-model="locale" />
      </div>
    </div>

    <div class="flex gap-8">
      <div v-if="person" class="w-1/2">
        <FieldGroup title="Personal" :cols="3">
          <Field label="Firstname" :value="person.firstName" />
          <Field label="Middlename" :value="person.middleName" />
          <Field label="Lastname" :value="person.lastName" />
          <Field label="Sex" :value="person.sex" />
        </FieldGroup>

        <FieldGroup title="Birthday" :cols="3">
          <Field label="Age" :value="person.age" />
          <Field label="Birthday" :value="formatDate(person.birthday)" />
          <Field label="Zodiac Sign" :value="person.zodiacSign" />
        </FieldGroup>

        <FieldGroup title="Physical" :cols="3">
          <Field label="Height" :value="person.height" />
          <Field label="Weight" :value="person.weight" />
          <Field label="Blood Type" :value="person.bloodType" />
        </FieldGroup>

        <FieldGroup title="Online" :cols="2">
          <Field label="Username" :value="person.username" />
          <Field label="Password" :value="person.password" />
          <Field label="E-Mail" :value="person.email" />
        </FieldGroup>

        <FieldGroup title="Finance" :cols="2">
          <Field label="Credit Card" :value="person.creditCardNumber" />
          <Field label="Issuer" :value="person.creditCardIssuer" />
          <Field label="Expiration Date" :value="formatDate(person.creditCardExpiration, { day: false })" />
          <Field label="CCV" :value="person.creditCardCCV" />
        </FieldGroup>
      </div>

      <Exporter :input="person" />
    </div>
  </UPage>
</template>

<script setup lang="ts">
import generatePerson from '#shared/generators/person';

definePageMeta({
  name: 'Person',
  icon: 'lucide:user',
});

const locale = ref<GeneratorLocale>('en');
const { data: person, refresh } = await useAsyncData<Person>('person', () => generatePerson(locale.value));
</script>
