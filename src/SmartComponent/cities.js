import React from "react";
import {
  CreateGuesser,
  ShowGuesser,
  FieldGuesser,
  ListGuesser,
  EditGuesser,
  InputGuesser,
} from "@api-platform/admin";

import {
  ReferenceInput,
  AutocompleteInput,
  TextField,
  ReferenceField,
} from "react-admin";

export const CityList = (props) => (
  <ListGuesser {...props} title={"Ciudades"}>
    <FieldGuesser source={"name"} label={"Nombre"} />
    <ReferenceField label="Provincia" source="province" reference="provinces">
      <TextField source="name" />
    </ReferenceField>
  </ListGuesser>
);

export const CityShow = (props) => (
  <ShowGuesser {...props} title={"Ver ciudad"}>
    <FieldGuesser source={"name"} label={"Nombre"} addLabel={true} />
    <ReferenceField label="Provincia" source="province" reference="provinces">
      <TextField source="name" />
    </ReferenceField>
    <FieldGuesser source={"createdAt"} label={"Creado"} addLabel={true} />
    <FieldGuesser source={"updatedAt"} label={"Actualizado"} addLabel={true} />
  </ShowGuesser>
);

export const CityEdit = (props) => (
  <EditGuesser {...props} title={"Editar ciudad"}>
    <InputGuesser source={"name"} label={"Nombre"} />
    <ReferenceInput
      source="province"
      reference="provinces"
      label="Provincia"
      filterToQuery={(searchText) => ({ name: searchText })}
    >
      <AutocompleteInput optionText="name" />
    </ReferenceInput>
  </EditGuesser>
);

export const CityCreate = (props) => (
  <CreateGuesser {...props} title={"Crear ciudad"}>
    <InputGuesser source={"name"} label={"Nombre"} />
    <ReferenceInput
      source="province"
      reference="provinces"
      label="Provincia"
      filterToQuery={(searchText) => ({ name: searchText })}
    >
      <AutocompleteInput optionText="name" />
    </ReferenceInput>
  </CreateGuesser>
);
