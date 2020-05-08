import React from "react";
import {EditGuesser, InputGuesser, ShowGuesser, FieldGuesser, ListGuesser } from "@api-platform/admin";
import {Create, FormTab, TabbedForm} from "react-admin";

export const AdminList = props => (
    <ListGuesser {...props} title={"Administradores"}>
        <FieldGuesser source={"name"} label={"Nombre"}/>
        <FieldGuesser source={"lastName"} label={"Apellido"}/>
        <FieldGuesser source={"cuit"} label={"CUIT"}/>
        <FieldGuesser source={"cellPhone"} label={"Celular"}/>
        <FieldGuesser source={"email"} label={"Email"}/>
    </ListGuesser>
);

export const AdminShow = props => (
    <ShowGuesser {...props} title={"Ver Administrador"}>
        <FieldGuesser source={"name"} label={"Nombre"} addLabel={true}/>
        <FieldGuesser source={"lastName"} label={"Apellido"} addLabel={true}/>
        <FieldGuesser source={"dni"} label={"DNI"} addLabel={true}/>
        <FieldGuesser source={"cuit"} label={"CUIT"} addLabel={true}/>
        <FieldGuesser source={"cellPhone"} label={"Celular"} addLabel={true}/>
        <FieldGuesser source={"position"} label={"Puesto"} addLabel={true}/>
        <FieldGuesser source={"job"} label={"Función"} addLabel={true}/>
        <FieldGuesser source={"email"} label={"Email"} addLabel={true}/>
        <FieldGuesser source={"username"} label={"Nombre de usuario"} addLabel={true}/>
        <FieldGuesser source={"isActive"} label={"Activo"} addLabel={true}/>
    </ShowGuesser>
);

export const AdminEdit = props => (
    <EditGuesser {...props} title={"Editar Administrador"}>
        <InputGuesser source={"name"} label={"Nombre"}/>
        <InputGuesser source={"lastName"} label={"Apellido"}/>
        <InputGuesser source={"dni"} label={"DNI"}/>
        <InputGuesser source={"cuit"} label={"CUIT"}/>
        <InputGuesser source={"cellPhone"} label={"Celular"}/>
        <InputGuesser source={"position"} label={"Puesto"}/>
        <InputGuesser source={"job"} label={"Función"}/>
        <InputGuesser source={"email"} label={"Email"}/>
        <InputGuesser source={"password"} label={"Password"}/>
        <InputGuesser source={"username"} label={"Nombre de usuario"}/>
        <InputGuesser source={"isActive"} label={"Activo"}/>
    </EditGuesser>
);


export const AdminCreate = props => (
    <Create {...props} title={"Crear Administrador"}>
        <TabbedForm>
            <FormTab label="Datos de la persona">
                <InputGuesser source={"name"} label={"Nombre"}/>
                <InputGuesser source={"lastName"} label={"Apellido"}/>
                <InputGuesser source={"dni"} label={"DNI"}/>
                <InputGuesser source={"cuit"} label={"CUIT"}/>
                <InputGuesser source={"cellPhone"} label={"Celular"}/>
                <InputGuesser source={"position"} label={"Puesto"}/>
                <InputGuesser source={"job"} label={"Función"}/>
            </FormTab>
            <FormTab label="Datos de la cuenta">
                <InputGuesser source={"email"} label={"Email"}/>
                <InputGuesser source={"password"} label={"Password"}/>
                <InputGuesser source={"username"} label={"Nombre de usuario"}/>
                <InputGuesser source={"isActive"} label={"Activo"}/>
            </FormTab>

        </TabbedForm>
    </Create>
);
