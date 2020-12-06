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
  ImageInput,
  ImageField,
  ArrayField,
  SingleFieldList,
  ReferenceField,
  FunctionField, TextField,
} from 'react-admin';
import StringToLabelObject from '../Componet/StringToLabelObject';

export const SaleTypeList = props => (
    <ListGuesser {...props} title={"Categorias de beneficios"}>
        <FieldGuesser source={"name"} label={"Nombre"}/>
        <FieldGuesser source={"description"} label={"Descripción"} />
    </ListGuesser>
);


export const SaleTypeShow = props => (
  <ShowGuesser {...props} title={'Ver Categoria de Beneficio'}>
    <FieldGuesser source={'name'} addLabel={true} label={'Nombre'}/>
    <FieldGuesser source={'description'} addLabel={true} label={'Descripción'}/>
    <ImageField source={'imagen'}/>
    <FieldGuesser source={'createdAt'} addLabel={true} label={'Creado'}/>
    <FieldGuesser source={'updatedAt'} addLabel={true} label={'Actualizado'}/>
  </ShowGuesser>
);

export const SaleTypeEdit = props => (
    <EditGuesser {...props} title={"Editar Categoria de Beneficio"}>
        <InputGuesser source={"name"} label={"Nombre"}/>
        <InputGuesser source={"description"} multiline label={"Descripción"}/>
    </EditGuesser>
);


export const SaleTypeCreate = props => (
    <CreateGuesser {...props} title={"Crear Categoria de Beneficio"}>
        <InputGuesser source={"name"} label={"Nombre"}/>
        <InputGuesser source={"description"} multiline label={"Descripción"}/>
        <ImageInput source="media_objects" label="Imagen" accept="image/*">
            <ImageField source="image" title="title" />
        </ImageInput>

    </CreateGuesser>
);

