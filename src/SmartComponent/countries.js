import React from "react";
import {CreateGuesser, FieldGuesser, ListGuesser, ShowGuesser, EditGuesser, InputGuesser} from "@api-platform/admin";

export const CountryList = props => (
    <ListGuesser {...props} title={"Paises"}>
            <FieldGuesser source={"code"} label={"Código"}/>
            <FieldGuesser source={"name"} label={"Nombre"}/>
    </ListGuesser>
);

export const CountryShow = props => (
    <ShowGuesser {...props} title={"Ver Pais"}>
        <FieldGuesser source={"code"} label={"Código"} addLabel={true} />
        <FieldGuesser source={"name"} label={"Nombre"} addLabel={true} />
        <FieldGuesser source={"createdAt"} label={"Creado"} addLabel={true} />
        <FieldGuesser source={"updatedAt"} label={"Actualizado"} addLabel={true} />
    </ShowGuesser>
);

export const CountryEdit = props => (
    <EditGuesser {...props} title={"Editar Pais"}>
        <InputGuesser source={"code"} label={"Código"}/>
        <InputGuesser source={"name"} label={"Nombre"}/>
    </EditGuesser>
);

export const CountryCreate = props => (
    <CreateGuesser {...props} title={"Crear Pais"}>
        <InputGuesser source={"code"} label={"Código"}/>
        <InputGuesser source={"name"} label={"Nombre"}/>
    </CreateGuesser>
);
