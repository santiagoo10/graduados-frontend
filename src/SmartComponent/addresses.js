import React from "react";
import { EditGuesser, ShowGuesser, InputGuesser,  FieldGuesser, ListGuesser} from "@api-platform/admin";



export const AddressList = props => (
    <ListGuesser {...props}>
        <FieldGuesser source={"name"} label={"Nombre"}/>
        <FieldGuesser source={"street"} label={"Calle"}/>
        <FieldGuesser source={"number"} label={"Número"}/>
        <FieldGuesser source={"phoneNumber"}  label={"Número de teléfono"}/>
        <FieldGuesser source={"zone"} label={"Zona"}/>
    </ListGuesser>
);

export const AddressShow = props => (
    <ShowGuesser {...props}>
        <FieldGuesser source={"name"} label={"Nombre"} addLabel={true} />
        <FieldGuesser source={"street"} label={"Calle"} addLabel={true} />
        <FieldGuesser source={"number"} label={"Número"} addLabel={true} />
        <FieldGuesser source={"routeType"} label={"Tipo de ruta"} addLabel={true} />
        <FieldGuesser source={"routeNumber"} label={"Número de ruta"} addLabel={true} />
        <FieldGuesser source={"km"} addLabel={true} />
        <FieldGuesser source={"lat"} addLabel={true} />
        <FieldGuesser source={"lon"} addLabel={true} />
        <FieldGuesser source={"phoneNumber"} label={"Número de teléfono"} addLabel={true} />
        <FieldGuesser source={"zone"} label={"Zona"} addLabel={true} />
        <FieldGuesser source={"createdAt"} label={"Creado"} addLabel={true} />
        <FieldGuesser source={"updatedAt"} label={"Actualizado"} addLabel={true} />
    </ShowGuesser>
);

export const AddressEdit = props => (
    <EditGuesser {...props}>
        <InputGuesser source={"name"} label={"Nombre"} />
        <InputGuesser source={"street"} label={"Calle"}/>
        <InputGuesser source={"number"} label={"Número"}/>
        <InputGuesser source={"routeType"} label={"Tipo de ruta"}/>
        <InputGuesser source={"routeNumber"} label={"Número de ruta"} />
        <InputGuesser source={"km"} />
        <InputGuesser source={"lat"} />
        <InputGuesser source={"lon"} />
        <InputGuesser source={"phoneNumber"} label={"Número de teléfono"}/>
        <InputGuesser source={"zone"} label={"Zona"}/>
    </EditGuesser>
);

