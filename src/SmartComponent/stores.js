import React from 'react';
import {
  InputGuesser,
  FieldGuesser,
  ListGuesser,
  ShowGuesser,
  EditGuesser,
  CreateGuesser
} from '@api-platform/admin';
import {
  AutocompleteInput,
  NumberInput,
  ReferenceInput,
  TextInput,
  ReferenceField,
  TextField,
} from 'react-admin';

export const StoreCreate = props => (
  <CreateGuesser{...props} title={'Crear Patrocinador'}>
    <InputGuesser source={'name'} label={'Razón Social'}/>
    <InputGuesser source={'description'} label={'Descripción'}/>
    <InputGuesser source={'phone'} label={'Teléfono'}/>
    <ReferenceInput
      source="owner"
      reference="users"
      label="Responsable"
      filterToQuery={(searchText) => ({ username: searchText })}
    >
      <AutocompleteInput optionText="username"/>
    </ReferenceInput>
    <TextInput source="address.name" label={'Nombre'}/>
    <TextInput source="address.street" label={'Calle'}/>
    <NumberInput source="address.number" label={'Número'}/>
    <NumberInput source="address.latitude" label={'Lat'}/>
    <NumberInput source="address.longitude" label={'Long'}/>

    <TextInput
      source="address.phoneNumber"
      label="Número de teléfono"/>
  </CreateGuesser>
);

export const StoreList = props => (
  <ListGuesser {...props} title={'Patrocinadores'}>
    <FieldGuesser source={'name'} label={'Razón Social'}/>
    <FieldGuesser source={'phone'} label={'Teléfono'}/>
    <ReferenceField label="Contacto" source="owner" reference="users">
      <TextField source="username"/>
    </ReferenceField>
  </ListGuesser>
);

export const StoreShow = props => (
  <ShowGuesser {...props} title={'Ver Patrocinador'}>
    <FieldGuesser source={'name'} addLabel={true} label={'Razón Social'}/>
    <FieldGuesser source={'description'} addLabel={true} label={'Descripción'}/>
    <FieldGuesser source={'phone'} addLabel={true} label={'Teléfono'}/>
    <ReferenceField reference="addresses" source="id" label="Domicilio">
      <TextField source={'name'}/>
    </ReferenceField>
    <ReferenceField label="Contacto" source="owner" reference="users">
      <TextField source="username"/>
    </ReferenceField>
    <FieldGuesser source={'createdAt'} addLabel={true} label={'Creado'}/>
    <FieldGuesser source={'updatedAt'} addLabel={true} label={'Actualizado'}/>
  </ShowGuesser>
);

export const StoreEdit = props => (
  <EditGuesser {...props} title={'Editar Patrocinador'}>
    <InputGuesser source={'name'} label={'Razón Social'}/>
    <InputGuesser source={'description'} label={'Descripción'}/>
    <InputGuesser source={'phone'} label={'Teléfono'}/>
  </EditGuesser>
);
