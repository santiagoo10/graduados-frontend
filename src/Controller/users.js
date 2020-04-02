import React from "react";
import {CreateGuesser,InputGuesser, ShowGuesser, FieldGuesser, ListGuesser} from "@api-platform/admin";

export const UserList = props => (
    <ListGuesser {...props}>
        <FieldGuesser source={"email"} label={"Email"}  />
        <FieldGuesser source={"username"} label={"Nombre de usuario"}/>
        <FieldGuesser source={"isActive"} label={"Activo"}/>
    </ListGuesser>
);