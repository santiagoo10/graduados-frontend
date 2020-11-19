import React from "react";
import {
  CreateGuesser,
  EditGuesser,
  InputGuesser,
  ShowGuesser,
  FieldGuesser,
  ListGuesser,
} from "@api-platform/admin";

import {
  ReferenceField,
  ReferenceInput,
  AutocompleteInput,
  TextField,
} from "react-admin";

export const ProvinceCreate = (props) => (
  <CreateGuesser {...props} title={"Crear Provincia"}>
    <InputGuesser source={"code"} label={"Código"} />
    <InputGuesser source={"name"} label={"Nombre"} />
    <InputGuesser source={"abbreviation"} label={"Abreviación"} />

    <ReferenceInput
      source="country"
      reference="countries"
      label="País"
      filterToQuery={(searchText) => ({ name: searchText })}
    >
      <AutocompleteInput optionText="name" />
    </ReferenceInput>
  </CreateGuesser>
);

export const ProvinceList = (props) => (
  <ListGuesser {...props} title={"Provincias"}>
    <FieldGuesser source={"code"} label={"Código"} />
    <FieldGuesser source={"name"} label={"Nombre"} />
    <FieldGuesser source={"abbreviation"} label={"Abreviación"} />
    <ReferenceField label="País" source="country" reference="countries">
      <TextField source="name" />
    </ReferenceField>
  </ListGuesser>
);

export const ProvinceShow = (props) => {
  return (
    <ShowGuesser {...props} title={"Ver Provincia"}>
      <FieldGuesser source={"code"} label={"Código"} addLabel={true} />
      <FieldGuesser source={"name"} label={"Nombre"} addLabel={true} />
      <FieldGuesser
        source={"abbreviation"}
        label={"Abreviación"}
        addLabel={true}
      />
      <ReferenceField label="País" source="country" reference="countries">
        <TextField source="name" />
      </ReferenceField>
      <FieldGuesser source={"createdAt"} label={"Creado"} addLabel={true} />
      <FieldGuesser
        source={"updatedAt"}
        label={"Actualizado"}
        addLabel={true}
      />
    </ShowGuesser>
  );
};

export const ProvinceEdit = (props) => (
  <EditGuesser {...props} title={"Editar Provincia"}>
    <InputGuesser source={"code"} label={"Código"} />
    <InputGuesser source={"name"} label={"Nombre"} />
    <InputGuesser source={"abbreviation"} label={"Abreviación"} />
    <ReferenceInput
      source="country"
      reference="countries"
      label="País"
      filterToQuery={(searchText) => ({ name: searchText })}
    >
      <AutocompleteInput optionText="name" />
    </ReferenceInput>
  </EditGuesser>
);
