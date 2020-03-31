import {FieldGuesser, ListGuesser} from "@api-platform/admin";
import React from "react";

export const ZoneList = props => (
    <ListGuesser {...props}>
        <FieldGuesser source={"code"} label={"Código"}/>
        <FieldGuesser source={"name"} label={"Nombre"}/>
        <FieldGuesser source={"type"} label={"Tipo"}/>
        <FieldGuesser source={"city"} label={"Ciudad"}/>
    </ListGuesser>
);