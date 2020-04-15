import React from "react";
import {
    InputGuesser,
    FieldGuesser,
    ListGuesser,
    ShowGuesser,
    EditGuesser
} from "@api-platform/admin";
import {
    BooleanInput,
    AutocompleteInput,
    Create,
    FormTab,
    NumberInput,
    ReferenceInput,
    SelectInput,
    TabbedForm,
    TextInput,
    PasswordInput,
} from "react-admin";

const choices = [
    {id: '001', name: 'Nacional'},
    {id: '002', name: 'Provincial'}
];

export const StoreCreate = props => (
    <Create{...props} title={"Crear Patrocinador"}>
        <TabbedForm>
            <FormTab label={"Patrocinador"}>
                <InputGuesser source={"razonSocial"} label={"Razón Social"}/>
                <InputGuesser source={"cuit"} label={"CUIT"}/>
                <InputGuesser source={"email"} label={"Email"}/>
                <InputGuesser source={"phone"} label={"Teléfono"}/>
                <InputGuesser source={"website"} label={"Website"}/>
                <InputGuesser source={"facebook"} label={"Facebook"}/>
                <InputGuesser source={"instagram"} label={"Instagram"}/>
                <InputGuesser source={"twitter"} label={"Twitter"}/>
                <InputGuesser source={"mercadolibre"} label={"Mercado Libre"}/>
            </FormTab>

            <FormTab label={"Domicilio"}>
                <TextInput source="address.name" label={"Nombre"}/>
                <TextInput source="address.street" label={"Calle"}/>
                <NumberInput source="address.number" label={"Número"}/>
                <AutocompleteInput
                    source={"address.routeType"}
                    choices={choices}
                    optionText="name"
                    optionValue="id"
                    label={"Tipo de ruta"}/>
                <NumberInput source="address.routeNumber"
                             label={"Número de ruta"}/>
                <NumberInput source="address.km" label="Km"/>
                <TextInput
                    source="address.phoneNumber"
                    label="Número de teléfono"/>
                <ReferenceInput label="Zona" source="address.zone" reference="zones">
                    <SelectInput optionText="address.zone"/>
                </ReferenceInput>
            </FormTab>
            <FormTab label={"Contacto"}>
                <TextInput source="owner.name" label={"Nombre"}/>
                <TextInput source="owner.lastName" label={"Apellido"}/>
                <TextInput source="owner.dni" label={"DNI"}/>
                <TextInput source="owner.cuit" label={"CUIT"}/>
                <TextInput source="owner.cellPhone" label={"Celular"}/>
                <TextInput source="owner.username" label={"Nombre de usuario"}/>
                <TextInput source="owner.email" label={"Email"}/>
                <PasswordInput source="owner.password" label={"Password"}/>
                <BooleanInput source="owner.isActive" label={"Activo"}/>
            </FormTab>
        </TabbedForm>
    </Create>
);

export const StoreList = props => (
    <ListGuesser {...props} title={"Patrocinadores"}>
        <FieldGuesser source={"razonSocial"} label={"Razón Social"}/>
        <FieldGuesser source={"cuit"} label={"CUIT"}/>
        <FieldGuesser source={"phone"} label={"Teléfono"}/>
        <FieldGuesser source={"owner"} label={"Contacto"}/>
    </ListGuesser>
);

export const StoreShow = props => (
    <ShowGuesser {...props} title={"Ver Patrocinador"}>
        <FieldGuesser source={"razonSocial"} addLabel={true} label={"Razón Social"}/>
        <FieldGuesser source={"cuit"} addLabel={true} label={"CUIT"}/>
        <FieldGuesser source={"email"} addLabel={true} label={"Email"}/>
        <FieldGuesser source={"phone"} addLabel={true} label={"Teléfono"}/>
        <FieldGuesser source={"website"} addLabel={true}/>
        <FieldGuesser source={"facebook"} addLabel={true}/>
        <FieldGuesser source={"instagram"} addLabel={true}/>
        <FieldGuesser source={"twitter"} addLabel={true}/>
        <FieldGuesser source={"mercadolibre"} addLabel={true} label={"Mercado Libre"}/>
        <FieldGuesser source={"address"} addLabel={true} label={"Domicilio"}/>
        <FieldGuesser source={"owner"} addLabel={true} label={"Contacto"}/>
        <FieldGuesser source={"createdAt"} addLabel={true} label={"Creado"}/>
        <FieldGuesser source={"updatedAt"} addLabel={true} label={"Actualizado"}/>
    </ShowGuesser>
);

export const StoreEdit = props => (
    <EditGuesser {...props} title={"Editar Patrocinador"}>
        <InputGuesser source={"razonSocial"} label={"Razón Social"}/>
        <InputGuesser source={"cuit"} label={"CUIT"}/>
        <InputGuesser source={"email"} label={"Email"}/>
        <InputGuesser source={"phone"} label={"Teléfono"}/>
        <InputGuesser source={"website"}/>
        <InputGuesser source={"facebook"}/>
        <InputGuesser source={"instagram"}/>
        <InputGuesser source={"twitter"}/>
        <InputGuesser source={"mercadolibre"} label={"Mercado Libre"}/>
    </EditGuesser>
);
