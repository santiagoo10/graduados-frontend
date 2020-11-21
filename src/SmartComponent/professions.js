import React from "react";
import {
  ShowGuesser,
  CreateGuesser,
  ListGuesser,
  FieldGuesser,
  EditGuesser,
  InputGuesser,
} from "@api-platform/admin";

import {
  ReferenceField,
  TextField,
  ReferenceInput,
  AutocompleteInput,
} from "react-admin";

//TODO: falta ver como visualizar esto en los list
const choices = [
  { id: "001", name: "Grado" },
  { id: "002", name: "Pregrado" },
  { id: "003", name: "Posgrado" },
];

export const ProfessionCreate = (props) => (
  <CreateGuesser {...props} title={"Crear Profesion"}>
    <InputGuesser source={"name"} label={"Nombre"} />
    <AutocompleteInput
      source={"type"}
      choices={choices}
      optionText="name"
      optionValue="id"
      label={"Tipo"}
    />
    <ReferenceInput
      source="academicUnit"
      reference="academic_units"
      label="Unidad Académica"
      filterToQuery={(searchText) => ({ name: searchText })}
    >
      <AutocompleteInput optionText="name" />
    </ReferenceInput>
  </CreateGuesser>
);

export const ProfessionShow = (props) => (
  <ShowGuesser {...props} title={"Ver Profesion"}>
    <FieldGuesser source={"name"} label={"Nombre"} addLabel={true} />
    <FieldGuesser source={"type"} addLabel={true} label={"Tipo"} />
    <FieldGuesser
      source={"academicUnit"}
      label={"Unidad Académica"}
      addLabel={true}
    />
    <FieldGuesser source={"createdAt"} addLabel={true} label={"Creado"} />
    <FieldGuesser source={"updatedAt"} addLabel={true} label={"Actualizado"} />
  </ShowGuesser>
);

export const ProfessionList = (props) => (
  <ListGuesser {...props} title={"Profesiones"}>
    <FieldGuesser source={"name"} label={"Nombre"} />
    <FieldGuesser source={"type"} label={"Tipo"} />

    <ReferenceField
      label="Unidad Académica"
      source="academicUnit"
      reference="academic_units"
    >
      <TextField source="name" />
    </ReferenceField>
  </ListGuesser>
);

export const ProfessionEdit = (props) => (
  <EditGuesser {...props} title={"Editar Profesion"}>
    <InputGuesser source={"name"} label={"Nombre"} />
    <InputGuesser source={"type"} label={"Tipo"} />
    <ReferenceInput
      source="academicUnit"
      reference="academic_units"
      label="Unidad Académica"
      filterToQuery={(searchText) => ({ name: searchText })}
    >
      <AutocompleteInput optionText="name" />
    </ReferenceInput>
  </EditGuesser>
);
