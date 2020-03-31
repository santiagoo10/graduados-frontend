import React from "react";
import {FieldGuesser, ListGuesser} from "@api-platform/admin";

export const CountryList = props => (
    <ListGuesser {...props}>
            <FieldGuesser source={"code"} label={"Código"}/>
            <FieldGuesser source={"name"} label={"Nombre"}/>
    </ListGuesser>
);

