import React from "react";
import {
  ShowGuesser,
  EditGuesser,
  InputGuesser,
  FieldGuesser,
  ListGuesser,
  CreateGuesser,
} from "@api-platform/admin";

import { TextInput, email, number } from "react-admin";

export const AcademicUnitEdit = (props) => (
  <EditGuesser {...props} title={"Editar Unidad Académica"}>
    <InputGuesser source={"name"} label={"Nombre"} />
    <TextInput source={"phone"} label={"Teléfono"} validate={number()} />
    <TextInput
      label="Correo Electronico"
      source="email"
      type="email"
      validate={email()}
    />
  </EditGuesser>
);

export const AcademicUnitCreate = (props) => (
  <CreateGuesser {...props} title={"Crear Unidad Académica"}>
    <InputGuesser source={"name"} label={"Nombre"} />
    <TextInput source={"phone"} label={"Teléfono"} validate={number()} />
    <TextInput
      label="Correo Electronico"
      source="email"
      type="email"
      validate={email()}
    />
  </CreateGuesser>
);

export const AcademicUnitList = (props) => (
  <ListGuesser {...props} title={"Unidades Acádemicas"}>
    <FieldGuesser source={"name"} label={"Nombre"} />
    <FieldGuesser source={"phone"} label={"Teléfono"} />
    <FieldGuesser source={"email"} label={"Email"} />
  </ListGuesser>
);

export const AcademicUnitShow = (props) => (
  <ShowGuesser {...props} title={"Ver Unidad Académica"}>
    <FieldGuesser source={"name"} label={"Nombre"} addLabel={true} />
    <FieldGuesser source={"phone"} label={"Teléfono"} addLabel={true} />
    <FieldGuesser source={"email"} label={"Email"} addLabel={true} />
    <FieldGuesser source={"createdAt"} label={"Creado"} addLabel={true} />
    <FieldGuesser source={"updatedAt"} label={"Actualizado"} addLabel={true} />
  </ShowGuesser>
);
