import React from "react";
import {
    ShowGuesser,
    EditGuesser,
    InputGuesser,
    FieldGuesser,
    ListGuesser,
    CreateGuesser
} from "@api-platform/admin";

export const AcademicUnitEdit = props => (
    <EditGuesser {...props} title={"Editar Unidad Académica"}>
        <InputGuesser source={"name"} label={"Nombre"}/>
        <InputGuesser source={"phone"} label={"Teléfono"}/>
        <InputGuesser source={"email"} label={"Email"}/>
    </EditGuesser>
);

export const AcademicUnitCreate = props => (
    <CreateGuesser {...props} title={"Crear Unidad Académica"}>
                <InputGuesser source={"name"} label={"Nombre"} />
                <InputGuesser source={"phone"} label={"Teléfono"} />
                <InputGuesser source={"email"} label={"Email"}/>
    </CreateGuesser>
);

export const AcademicUnitList = props => (
    <ListGuesser  {...props} title={"Unidades Acádemicas"}>
        <FieldGuesser source={"name"} label={"Nombre"} />
        <FieldGuesser source={"phone"} label={"Teléfono"} />
        <FieldGuesser source={"email"} label={"Email"} />
    </ListGuesser>
);



export const AcademicUnitShow = props => (
    <ShowGuesser {...props} title={"Ver Unidad Académica"}>
        <FieldGuesser source={"name"} label={"Nombre"}  addLabel={true} />
        <FieldGuesser source={"phone"} label={"Teléfono"} addLabel={true} />
        <FieldGuesser source={"email"} label={"Email"} addLabel={true} />
        <FieldGuesser source={"createdAt"} label={"Creado"} addLabel={true} />
        <FieldGuesser source={"updatedAt"} label={"Actualizado"} addLabel={true} />
    </ShowGuesser>
);