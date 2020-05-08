import React from "react";
import { CreateGuesser, EditGuesser, InputGuesser, ShowGuesser, FieldGuesser, ListGuesser} from "@api-platform/admin";


export const ProvinceCreate = props => (
    <CreateGuesser {...props} title={"Crear Provincia"}>
        <InputGuesser source={"code"} label={"Código"}/>
        <InputGuesser source={"name"} label={"Nombre"}/>
        <InputGuesser source={"abbreviation"} label={"Abreviación"}/>
        <InputGuesser source={"country"} label={"Pais"}/>
    </CreateGuesser>
);

export const ProvinceList = props => (
    <ListGuesser {...props} title={"Provincias"}>
        <FieldGuesser source={"code"} label={"Código"}/>
        <FieldGuesser source={"name"} label={"Nombre"}/>
        <FieldGuesser source={"abbreviation"} label={"Abreviación"}/>
        <FieldGuesser source={"country"} label={"Pais"}/>
    </ListGuesser>
);

export const ProvinceShow = props => (
    <ShowGuesser {...props} title={"Ver Provincia"}>
        <FieldGuesser source={"code"} label={"Código"} addLabel={true} />
        <FieldGuesser source={"name"} label={"Nombre"} addLabel={true} />
        <FieldGuesser source={"abbreviation"} label={"Abreviación"} addLabel={true} />
        <FieldGuesser source={"country"}  label={"Pais"} addLabel={true} />
        <FieldGuesser source={"createdAt"} label={"Creado"} addLabel={true} />
        <FieldGuesser source={"updatedAt"} label={"Actualizado"} addLabel={true} />
    </ShowGuesser>
);

export const ProvinceEdit = props => (
    <EditGuesser {...props} title={"Editar Provincia"}>
            <InputGuesser source={"code"} label={"Código"} />
            <InputGuesser source={"name"} label={"Nombre"}/>
            <InputGuesser source={"abbreviation"} label={"Abreviación"}/>
            <InputGuesser source={"country"} label={"Pais"}/>
    </EditGuesser>
);
