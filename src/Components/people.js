import React from "react";
import { FieldGuesser, ListGuesser, EditGuesser, InputGuesser} from "@api-platform/admin";

export const PersonEdit = props => (
    <EditGuesser {...props}>
        <InputGuesser source={"name"}  label={"Nombre"}/>
        <InputGuesser source={"lastName"} label={"Apellido"}/>
        <InputGuesser source={"email"} label={"Email"}/>
        <InputGuesser source={"dni"} label={"DNI"}/>
        <InputGuesser source={"cuit"} label={"CUIT"}/>
        <InputGuesser source={"cellPhone"} label={"Celular"}/>
        <InputGuesser source={"user"} />
        <InputGuesser source={"addresses"} />
    </EditGuesser>
);


export const PersonList = props => (
    <ListGuesser {...props}>
        <FieldGuesser source={"name"} label={"Nombre"}/>
        <FieldGuesser source={"lastName"} label={"Apellido"}/>
        <FieldGuesser source={"email"} label={"Email"}/>
        <FieldGuesser source={"dni"} label={"DNI"}/>
        <FieldGuesser source={"cuit"} label={"CUIT"}/>
        <FieldGuesser source={"cellPhone"} label={"Celular"}/>
        <FieldGuesser source={"user"} />
        <FieldGuesser source={"addresses"} />
        <FieldGuesser source={"createdAt"} />
        <FieldGuesser source={"updatedAt"} />
    </ListGuesser>
);