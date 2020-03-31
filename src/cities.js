import {FieldGuesser, ListGuesser} from "@api-platform/admin";
import React from "react";

export const CityList = props => (
    <ListGuesser {...props}>
        <FieldGuesser source={"name"} label={"Nombre"}/>
        <FieldGuesser source={"province"} label={"Provincia"}/>
    </ListGuesser>
);
