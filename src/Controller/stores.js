import React from "react";
import {
    CreateGuesser,
    InputGuesser,
    FieldGuesser,
    ListGuesser
} from "@api-platform/admin";

export const StoreCreate = props => (
    <CreateGuesser {...props}>
        <InputGuesser source={"razonSocial"}  label={"Razón Social"}/>
        <InputGuesser source={"cuit"} label={"Cuit"}/>
        <InputGuesser source={"email"} label={"Email"}/>
        <InputGuesser source={"phone"} label={"Teléfono"}/>
        <InputGuesser source={"website"} label={"Website"}/>
        <InputGuesser source={"facebook"} label={"Facebook"}/>
        <InputGuesser source={"instagram"} label={"Instagram"}/>
        <InputGuesser source={"twitter"} label={"Twitter"}/>
        <InputGuesser source={"mercadolibre"} label={"Mercado Libre"}/>
        <InputGuesser source={"contact"} label={"Contacto"}/>
        <InputGuesser source={"address"} label={"Domicilio"}/>
    </CreateGuesser>
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
