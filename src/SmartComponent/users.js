import React from "react";
import {CreateGuesser,InputGuesser, ShowGuesser, FieldGuesser, ListGuesser} from "@api-platform/admin";

export const UserList = props => (
    <ListGuesser {...props} title={"Usuarios"}>
        <FieldGuesser source={"email"} label={"Email"}  />
        <FieldGuesser source={"username"} label={"Nombre de usuario"}/>
        <FieldGuesser source={"isActive"} label={"Activo"}/>
    </ListGuesser>
);

export const UserCreate = props => (
    <CreateGuesser {...props}>
        <InputGuesser source={"email"} label={"Email"}/>
        <InputGuesser source={"password"} />
        <InputGuesser source={"username"} label={"Nombre de usuario"}/>
        <InputGuesser source={"isActive"} label={"Activo"}/>
    </CreateGuesser>
);

export const UserShow = props => (
    <ShowGuesser {...props}>
        <FieldGuesser source={"email"} label={"Email"} addLabel={true} />
        <FieldGuesser source={"username"} label={"Nombre de usuario"} addLabel={true} />
        <FieldGuesser source={"isActive"} label={"Activo"} addLabel={true} />
        <FieldGuesser source={"createdAt"} label={"Creado"} addLabel={true} />
        <FieldGuesser source={"updatedAt"} label={"Actualizado"} addLabel={true} />
    </ShowGuesser>
);
