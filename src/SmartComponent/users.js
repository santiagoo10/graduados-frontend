import React from 'react';
import {
  EditGuesser,
  CreateGuesser,
  InputGuesser,
  ShowGuesser,
  FieldGuesser,
  ListGuesser
} from '@api-platform/admin';
import {
  ArrayField,
  SelectArrayInput,
  SingleFieldList,
  ChipField,
} from 'react-admin';
import StringToLabelObject from '../Componet/StringToLabelObject';

export const UserList = props => (
  <ListGuesser {...props} title={'Usuarios'}>
    <FieldGuesser source={'email'} label={'Email'}/>
    <FieldGuesser source={'username'} label={'Nombre de usuario'}/>
    <ArrayField source="roles">
      <SingleFieldList>
        <StringToLabelObject>
          <ChipField source="label"/>
        </StringToLabelObject>
      </SingleFieldList>
    </ArrayField>

  </ListGuesser>
);

export const UserCreate = props => (
  <CreateGuesser {...props}>
    <InputGuesser source={'email'} label={'Email'}/>
    <InputGuesser source={'password'}/>
    <InputGuesser source={'username'} label={'Nombre de usuario'}/>
    <InputGuesser source={'isActive'} label={'Activo'}/>
    <SelectArrayInput label="Roles" source="roles" choices={[
      { id: 'ROLE_ADMIN', name: 'Administrador' },
      { id: 'ROLE_GRADUATE', name: 'Graduado' },
      { id: 'ROLE_OWNER', name: 'Responsable de tienda' },
    ]} />
  </CreateGuesser>
);

export const UserShow = props => (
  <ShowGuesser {...props}>
    <FieldGuesser source={'email'} label={'Email'} addLabel={true}/>
    <FieldGuesser
      source={'username'} label={'Nombre de usuario'} addLabel={true}
    />
    <FieldGuesser source={'isActive'} label={'Activo'} addLabel={true}/>
    <FieldGuesser source={'createdAt'} label={'Creado'} addLabel={true}/>
    <FieldGuesser
      source={'updatedAt'} label={'Actualizado'} addLabel={true}
    />
    <ArrayField source="roles">
      <SingleFieldList>
        <StringToLabelObject>
          <ChipField source="label"/>
        </StringToLabelObject>
      </SingleFieldList>
    </ArrayField>
  </ShowGuesser>
);

export const UserEdit = props => (
  <EditGuesser {...props}>
    <InputGuesser source={'email'}/>
    <InputGuesser source={'password'}/>
    <InputGuesser source={'username'}/>
    <InputGuesser source={'isActive'}/>
    <SelectArrayInput label="Roles" source="roles" choices={[
      { id: 'ROLE_ADMIN', name: 'Administrador' },
      { id: 'ROLE_GRADUATE', name: 'Graduado' },
      { id: 'ROLE_OWNER', name: 'Responsable de tienda' },
    ]} />
  </EditGuesser>
);
