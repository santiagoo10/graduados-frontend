import React from "react";
import {CreateGuesser,InputGuesser, FieldGuesser, ListGuesser} from "@api-platform/admin";

export const AcademicUnitCreate = props => (
    <CreateGuesser {...props}>
        <InputGuesser source={"name"} label={"Nombre"} />
        <InputGuesser source={"phone"} label={"Teléfono"} />
        <InputGuesser source={"email"} label={"Email"}/>
        <InputGuesser source={"contact"} label={"Contacto"} />
        <InputGuesser source={"address"} label={"Domicilio"}/>
    </CreateGuesser>
);

export const AcademicUnitList = props => (
    <ListGuesser {...props}>
        <FieldGuesser source={"name"} label={"Nombre"} />
        <FieldGuesser source={"phone"} label={"Teléfono"} />
        <FieldGuesser source={"email"} label={"Email"} />
        <FieldGuesser source={"contact"} label={"Contacto"} />
        <FieldGuesser source={"address"} label={"Domicilio"}/>
    </ListGuesser>
);