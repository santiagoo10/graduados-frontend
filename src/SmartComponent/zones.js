import React from "react";
import {
  FieldGuesser,
  ListGuesser,
  ShowGuesser,
  InputGuesser,
  CreateGuesser,
  EditGuesser,
} from "@api-platform/admin";

import {
  ReferenceField,
  TextField,
  ReferenceInput,
  AutocompleteInput,
} from "react-admin";

export const ZoneList = (props) => (
  <ListGuesser {...props} title={"Zonas"}>
    <FieldGuesser source={"code"} label={"Código"} />
    <FieldGuesser source={"name"} label={"Nombre"} />
    <FieldGuesser source={"type"} label={"Tipo"} />
    <ReferenceField label="Ciudad" source="city" reference="cities">
      <TextField source="name" />
    </ReferenceField>
  </ListGuesser>
);

export const ZoneEdit = (props) => (
  <EditGuesser {...props}>
    <InputGuesser source={"code"} label={"Código"} />
    <InputGuesser source={"name"} label={"Nombre"} />
    <InputGuesser source={"type"} label={"Tipo"} />
    <ReferenceInput
      source="city"
      reference="cities"
      label="Ciudad"
      filterToQuery={(searchText) => ({ name: searchText })}
    >
      <AutocompleteInput optionText="name" />
    </ReferenceInput>
  </EditGuesser>
);

export const ZoneShow = (props) => (
  <ShowGuesser {...props}>
    <FieldGuesser source={"code"} label={"Código"} addLabel={true} />
    <FieldGuesser source={"name"} label={"Nombre"} addLabel={true} />
    <FieldGuesser source={"type"} label={"Tipo"} addLabel={true} />
    <ReferenceField label="Ciudad" source="city" reference="cities">
      <TextField source="name" />
    </ReferenceField>
    <FieldGuesser source={"createdAt"} label={"Creado"} addLabel={true} />
    <FieldGuesser source={"updatedAt"} label={"Actualizado"} addLabel={true} />
  </ShowGuesser>
);

export const ZoneCreate = (props) => (
  <CreateGuesser {...props}>
    <InputGuesser source={"code"} label={"Código"} />
    <InputGuesser source={"name"} label={"Nombre"} />
    <InputGuesser source={"type"} label={"Tipo"} />
    <ReferenceInput
      source="city"
      reference="cities"
      label="Ciudad"
      filterToQuery={(searchText) => ({ name: searchText })}
    >
      <AutocompleteInput optionText="name" />
    </ReferenceInput>
  </CreateGuesser>
);
