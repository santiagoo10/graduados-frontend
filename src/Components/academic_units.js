import React from "react";
import {
    ShowGuesser,
    EditGuesser,
    InputGuesser,
    FieldGuesser,
    ListGuesser
} from "@api-platform/admin";
import {
    Create,
    ReferenceInput,
    TextInput,
    SelectInput,
    NumberInput,
    AutocompleteInput,
    TabbedForm,
    FormTab,
} from "react-admin";

const choices=[
    {id: '001', name:'Nacional'},
    {id: '002', name:'Provincial'}
];

export const AcademicUnitEdit = props => (
    <EditGuesser {...props}>
        <InputGuesser source={"name"} label={"Nombre"}/>
        <InputGuesser source={"phone"} label={"Teléfono"}/>
        <InputGuesser source={"email"} label={"Email"}/>
        <InputGuesser source={"contact"} label={"Contacto"}/>
        <InputGuesser source={"address"} label={"Domicilio"}/>
    </EditGuesser>
);

export const AcademicUnitCreate = props => (
    <Create {...props}>
        <TabbedForm>
            <FormTab label="Unidad Académica">
                <InputGuesser source={"name"} label={"Nombre"} />
                <InputGuesser source={"phone"} label={"Teléfono"} />
                <InputGuesser source={"email"} label={"Email"}/>
            </FormTab>

            <FormTab label="Contácto">
                <TextInput source="contact.name" label={"Nombre"}/>
                <TextInput source="contact.lastName" label={"Apellido"}/>
                <TextInput source="contact.email" label={"Email"} />
                <TextInput source="contact.dni" label={"DNI"}/>
                <TextInput source="contact.cuit" label={"CUIT"}/>
                <TextInput source="contact.cellPhone" label={"Celular"}/>
            </FormTab>

            <FormTab label="Domicilio">
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

export const AcademicUnitList = props => (
    <ListGuesser {...props}>
        <FieldGuesser source={"name"} label={"Nombre"} />
        <FieldGuesser source={"phone"} label={"Teléfono"} />
        <FieldGuesser source={"email"} label={"Email"} />
        <FieldGuesser source={"contact"} label={"Contacto"} />
        <FieldGuesser source={"address"} label={"Domicilio"}/>
    </ListGuesser>
);



export const AcademicUnitShow = props => (
    <ShowGuesser {...props}>
        <FieldGuesser source={"name"} label={"Nombre"}  addLabel={true} />
        <FieldGuesser source={"phone"} label={"Teléfono"} addLabel={true} />
        <FieldGuesser source={"email"} label={"Email"} addLabel={true} />
        <FieldGuesser source={"address"} label={"Domicilio"} addLabel={true} />
        <FieldGuesser source={"contact"} label={"Contacto"} addLabel={true} />
        <FieldGuesser source={"createdAt"} label={"Creado"} addLabel={true} />
        <FieldGuesser source={"updatedAt"} label={"Actualizado"} addLabel={true} />
    </ShowGuesser>
);