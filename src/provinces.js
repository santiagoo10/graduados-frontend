import React from "react";
import {FieldGuesser, ListGuesser} from "@api-platform/admin";


export const ProvinceList = props => (
    <ListGuesser {...props}>
        <FieldGuesser source={"code"} label={"Código"}/>
        <FieldGuesser source={"name"} label={"Nombre"}/>
        <FieldGuesser source={"abbreviation"} label={"Abreviación"}/>
        <FieldGuesser source={"country"} label={"Pais"}/>
    </ListGuesser>
);

