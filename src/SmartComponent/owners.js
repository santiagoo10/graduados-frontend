import React from "react";
import { InputGuesser, EditGuesser, ShowGuesser, FieldGuesser, ListGuesser} from "@api-platform/admin";

export const OwnerList = props => (

    <ListGuesser {...props} title={"Contactos de Patrocinadores"}>
        <FieldGuesser source={"name"} label={"Nombre"}/>
        <FieldGuesser source={"lastName"}  label={"Apellido"}/>
        <FieldGuesser source={"cellPhone"} label={"Celular"} />
        <FieldGuesser source={"email"} label={"Email"} />
        <FieldGuesser source={"isActive"} label={"Activo"}/>
    </ListGuesser>
);

export const OwnerShow = props => (
    <ShowGuesser {...props} title={"Ver Contacto de Patrocinador"}>
            <FieldGuesser source={"name"} label={"Nombre"} addLabel={true} />
            <FieldGuesser source={"lastName"} label={"Apellido"} addLabel={true} />
            <FieldGuesser source={"dni"} label={"DNI"} addLabel={true} />
            <FieldGuesser source={"cuit"} label={"CUIT"} addLabel={true} />
            <FieldGuesser source={"cellPhone"} label={"Celular"} addLabel={true} />
            <FieldGuesser source={"email"} label={"Email"} addLabel={true} />
            <FieldGuesser source={"username"} label={"Nombre de usuario"} addLabel={true} />
            <FieldGuesser source={"isActive"} label={"Activo"} addLabel={true} />
    </ShowGuesser>
);

export const OwnerEdit = props => (
    <EditGuesser {...props} label={"Editar Contacto de Patrocinador"}>
        <InputGuesser source={"name"} label={"Nombre"}/>
        <InputGuesser source={"lastName"} label={"Apellido"} />
        <InputGuesser source={"dni"} label={"DNI"}/>
        <InputGuesser source={"cuit"} label={"CUIT"}/>
        <InputGuesser source={"cellPhone"} label={"Celular"}/>
        <InputGuesser source={"email"} label={"Email"}/>

    </EditGuesser>
);
