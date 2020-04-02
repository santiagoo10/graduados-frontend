import React from "react";
import { CreateGuesser, EditGuesser, InputGuesser, ShowGuesser, FieldGuesser, ListGuesser} from "@api-platform/admin";


export const ProvinceCreate = props => (
    <CreateGuesser {...props}>
        <InputGuesser source={"code"} label={"Código"}/>
        <InputGuesser source={"name"} label={"Nombre"}/>
        <InputGuesser source={"abbreviation"} label={"Abreviación"}/>
        <InputGuesser source={"country"} label={"Pais"}/>
    </CreateGuesser>
);

export const ProvinceList = props => (
    <ListGuesser {...props}>
        <FieldGuesser source={"code"} label={"Código"}/>
        <FieldGuesser source={"name"} label={"Nombre"}/>
        <FieldGuesser source={"abbreviation"} label={"Abreviación"}/>
        <FieldGuesser source={"country"} label={"Pais"}/>
    </ListGuesser>
);

export const ProvinceShow = props => (
    <ShowGuesser {...props}>
        <FieldGuesser source={"code"} label={"Código"} addLabel={true} />
        <FieldGuesser source={"name"} label={"Nombre"} addLabel={true} />
        <FieldGuesser source={"abbreviation"} label={"Abreviación"} addLabel={true} />
        <FieldGuesser source={"country"}  label={"Pais"} addLabel={true} />
        <FieldGuesser source={"createdAt"} label={"Creado"} addLabel={true} />
        <FieldGuesser source={"updatedAt"} label={"Actualizado"} addLabel={true} />
    </ShowGuesser>
);

export const ProvinceEdit = props => (
    <EditGuesser {...props}>
            <InputGuesser source={"code"} label={"Código"} />
            <InputGuesser source={"name"} label={"Nombre"}/>
            <InputGuesser source={"abbreviation"} label={"Abreviación"}/>
            <InputGuesser source={"country"} label={"Pais"}/>
    </EditGuesser>
);
