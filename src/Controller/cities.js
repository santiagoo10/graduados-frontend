import React from "react";
import { CreateGuesser, ShowGuesser, FieldGuesser, ListGuesser, EditGuesser, InputGuesser} from "@api-platform/admin";

export const CityList = props => (
    <ListGuesser {...props}>
        <FieldGuesser source={"name"} label={"Nombre"}/>
        <FieldGuesser source={"province"} label={"Provincia"}/>
    </ListGuesser>
);

export const CityShow = props => (
    <ShowGuesser {...props}>
        <FieldGuesser source={"name"} label={"Nombre"} addLabel={true} />
        <FieldGuesser source={"province"} label={"Provincia"} addLabel={true} />
        <FieldGuesser source={"createdAt"} label={"Creado"} addLabel={true} />
        <FieldGuesser source={"updatedAt"} label={"Actualizado"} addLabel={true} />
    </ShowGuesser>
);

export const CityEdit = props => (
    <EditGuesser {...props}>
        <InputGuesser source={"name"} label={"Nombre"}/>
        <InputGuesser source={"province"} label={"Provincia"}/>
    </EditGuesser>
);


export const CityCreate = props => (
    <CreateGuesser {...props}>
        <InputGuesser source={"name"} label={"Nombre"}/>
        <InputGuesser source={"province"} label={"Provincia"}/>
    </CreateGuesser>
);
