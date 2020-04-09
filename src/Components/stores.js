import React from "react";
import {
    InputGuesser,
    FieldGuesser,
    ListGuesser
} from "@api-platform/admin";
import {
    AutocompleteInput,
    Create,
    FormTab,
    NumberInput,
    ReferenceInput,
    SelectInput,
    TabbedForm,
    TextInput
} from "react-admin";

const choices=[
    {id: '001', name:'Nacional'},
    {id: '002', name:'Provincial'}
];

export const StoreCreate = props => (
    <Create{...props}>
        <TabbedForm>
            <FormTab label={"Patrocinador"}>
                <InputGuesser source={"razonSocial"}  label={"Razón Social"}/>
                <InputGuesser source={"cuit"} label={"CUIT"}/>
                <InputGuesser source={"email"} label={"Email"}/>
                <InputGuesser source={"phone"} label={"Teléfono"}/>
                <InputGuesser source={"website"} label={"Website"}/>
                <InputGuesser source={"facebook"} label={"Facebook"}/>
                <InputGuesser source={"instagram"} label={"Instagram"}/>
                <InputGuesser source={"twitter"} label={"Twitter"}/>
                <InputGuesser source={"mercadolibre"} label={"Mercado Libre"}/>
            </FormTab>
            <FormTab label={"Contacto"}>
                <TextInput source="contact.name" label={"Nombre"}/>
                <TextInput source="contact.lastName" label={"Apellido"}/>
                <TextInput source="contact.email" label={"Email"} />
                <TextInput source="contact.dni" label={"DNI"}/>
                <TextInput source="contact.cuit" label={"CUIT"}/>
                <TextInput source="contact.cellPhone" label={"Celular"}/>
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
                    label={"Tipo de ruta"} />
                <NumberInput source="address.routeNumber"
                             label={"Número de ruta"} />
                <NumberInput source="address.km" label="Km" />
                <TextInput
                    source="address.phoneNumber"
                    label="Número de teléfono" />
                <ReferenceInput label="Zona" source="address.zone" reference="zones">
                    <SelectInput optionText="address.zone" />
                </ReferenceInput>
            </FormTab>
        </TabbedForm>
    </Create>
);

export const StoreList = props => (
    <ListGuesser {...props}>
            <FieldGuesser source={"razonSocial"} />
            <FieldGuesser source={"cuit"} />
            <FieldGuesser source={"email"} />
            <FieldGuesser source={"phone"} />
            <FieldGuesser source={"website"} />
            <FieldGuesser source={"facebook"} />
            <FieldGuesser source={"instagram"} />
            <FieldGuesser source={"twitter"} />
            <FieldGuesser source={"mercadolibre"} />
            <FieldGuesser source={"contact"} />
            <FieldGuesser source={"address"} />
    </ListGuesser>
);
